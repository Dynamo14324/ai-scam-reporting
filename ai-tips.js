import { GoogleGenerativeAI } from "@google/generative-ai";

// Your API Key
const API_KEY = "AIzaSyCzuE3cyayuW7IaPBK9nNCkLegeHr63Qbo";

// Initialize the Google Generative AI instance
const genAI = new GoogleGenerativeAI(API_KEY);

// Function to generate content
async function run() {
    const prompt = "You are an AI-powered assistant integrated into a Scam Reporting System. Your goal is to help victims accurately report online scams by gathering and optimizing the information they provide. Guide the user through the process of reporting the scam, asking for details like the method of contact, the nature of the scam, and any interactions or transactions that occurred. Analyze the provided information, enhance clarity, identify key details, and ensure the report is comprehensive. Your ultimate task is to create an optimized report that can be securely submitted to the authorities for further investigation, empowering the user and strengthening their trust in the system.";

    try {
        // Fetch the generative model
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Generate content based on the prompt
        const result = await model.generateContent(prompt);

        // Extract and display the generated text
        const response = await result.response;
        const text = await response.text();
        console.log(text);
    } catch (error) {
        console.error("Error generating content:", error);
    }
}

// Run the function to generate text
run();
