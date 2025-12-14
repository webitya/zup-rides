import { StandardCheckoutClient, Env } from "pg-sdk-node"

// Detect if we are inside the build phase
const isBuildTime = process.env.NEXT_PHASE === "phase-production-build"

/**
 * SAFE lazy loader for the PhonePe client.
 * Prevents authentication during build.
 */
export function getPhonePeClient() {
    if (isBuildTime) {
        console.warn("⚠️ PhonePeClient skipped during build — using mock client.")

        // Mock client — prevents ANY real API call at build time
        return {
            pay: async () => ({
                redirectUrl: "#",
                orderId: "BUILD_SKIP",
                expireAt: Date.now(),
                state: "SKIPPED",
            }),

            getOrderStatus: async () => ({
                state: "SKIPPED",
                amount: 0,
            }),

            validateCallback: () => ({
                valid: true,
            }),
        }
    }

    // Runtime actual PhonePe client
    return StandardCheckoutClient.getInstance(
        process.env.CLIENT_ID || "SU2509101240319707979509",
        process.env.CLIENT_SECRET || "1e7df590-7ae7-45a5-ad27-7a661ae902dc",
        parseInt(process.env.CLIENT_VERSION || "1"),
        process.env.NODE_ENV === "production" ? Env.PRODUCTION : Env.SANDBOX
    )
}
