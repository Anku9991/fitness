import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { systemInstruction, promptText, responseSchema } = await request.json();

    // 1. Identify API Key: Check server env first, fallback to client-supplied header
    let apiKey = process.env.GEMINI_API_KEY;
    
    // Check if client sent an overrides key in headers (for the settings fallback pane)
    const clientKey = request.headers.get("x-gemini-key");
    if (clientKey) {
      apiKey = clientKey;
    }

    if (!apiKey) {
      return NextResponse.json(
        { 
          error: "API_KEY_MISSING",
          message: "Gemini API key is not configured. Please set the GEMINI_API_KEY environment variable in your Vercel/server dashboard, or provide a temporary key in the Settings panel." 
        },
        { status: 400 }
      );
    }

    // 2. Build Gemini API endpoint and request payload
    // Use gemini-2.5-flash as the fast, powerful standard model
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ parts: [{ text: promptText }] }],
      systemInstruction: { parts: [{ text: systemInstruction }] },
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: responseSchema
      }
    };

    // 3. Call Gemini with retry logic
    const delays = [1000, 2000, 4000];
    let lastError: any = null;

    for (let attempt = 0; attempt < delays.length; attempt++) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(`Gemini API returned status ${response.status}: ${JSON.stringify(errData)}`);
        }

        const data = await response.json();
        
        // Parse and return the structured JSON content
        const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!rawText) {
          throw new Error("Empty response returned from Gemini API candidates.");
        }

        const jsonResult = JSON.parse(rawText.trim());
        return NextResponse.json(jsonResult);
      } catch (err) {
        lastError = err;
        // Wait before retrying
        if (attempt < delays.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, delays[attempt]));
        }
      }
    }

    throw lastError || new Error("Failed to contact Gemini API after multiple retries.");
  } catch (error: any) {
    console.error("Error in /api/gemini secure proxy:", error);
    return NextResponse.json(
      { 
        error: "GEMINI_API_FAILURE", 
        message: error.message || "An unexpected error occurred while communicating with Gemini." 
      },
      { status: 500 }
    );
  }
}
