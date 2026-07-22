import "dotenv/config";

const getOpenAIAPIResponse = async (message) => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: message,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    console.log("GEMINI RESPONSE:", data);
    if (data.error) {
  console.log("Gemini Error:", data.error);
  return `Gemini Error: ${data.error.message}`;
    }

return data.candidates[0].content.parts[0].text;

    return data.candidates[0].content.parts[0].text;
  } catch (err) {
    console.log(err);
    return "Sorry, something went wrong.";
  }
};

export default getOpenAIAPIResponse;