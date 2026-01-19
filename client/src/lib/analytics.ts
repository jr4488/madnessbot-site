/**
 * Google Ads Conversion Tracking Module
 * 
 * This module provides type-safe conversion tracking for Google Ads.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to Google Ads > Goals > Conversions
 * 2. Create conversion actions for each event type
 * 3. Copy the conversion label from each action's "Event snippet"
 * 4. Paste the labels in the CONVERSION_CONFIG below
 */

declare global {
    interface Window {
        gtag: (
            command: 'config' | 'event' | 'js',
            targetId: string | Date,
            config?: Record<string, unknown>
        ) => void;
        dataLayer: unknown[];
    }
}

// ============================================================================
// CONFIGURATION - Edit these values with your Google Ads conversion labels
// ============================================================================

const GOOGLE_ADS_ID = 'AW-17788348941';

/**
 * Conversion labels from Google Ads.
 * Format: 'AW-XXXXXXXXXX/XXXXXXXXXXXX' -> just use the part after the slash
 * 
 * To find these:
 * 1. Google Ads > Goals > Conversions > [Your Action] > Tag setup
 * 2. Look for the 'send_to' value in the event snippet
 * 3. Copy just the label part (after the /)
 */
const CONVERSION_CONFIG = {
    // Sign up / Start trial - tracks when user clicks to sign up
    signUp: 'OYU7CPyrvM4bEI3UkqJC', // TODO: Replace with actual Sign Up label

    // Purchase DIY plan ($29/mo)
    purchaseDiy: '', // TODO: Add label from Google Ads

    // Purchase Pro plan ($99/mo) 
    purchasePro: 'OYU7CPyrvM4bEI3UkqJC', // This one was retrieved successfully

    // Enterprise lead inquiry
    leadEnterprise: '', // TODO: Add label from Google Ads
} as const;

// ============================================================================
// TRACKING FUNCTIONS - Use these in your components
// ============================================================================

export type ConversionEvent = keyof typeof CONVERSION_CONFIG;

/**
 * Track a conversion event in Google Ads.
 * 
 * @param event - The type of conversion event
 * @returns true if tracking was sent, false if skipped
 * 
 * @example
 * // In a button click handler:
 * <Button onClick={() => trackConversion('signUp')}>Get Started</Button>
 */
export function trackConversion(event: ConversionEvent): boolean {
    const label = CONVERSION_CONFIG[event];

    // Skip if no label configured
    if (!label) {
        if (import.meta.env.DEV) {
            console.warn(`[Analytics] Conversion '${event}' skipped: no label configured`);
        }
        return false;
    }

    // Skip if gtag not available (e.g., ad blocker)
    if (typeof window === 'undefined' || !window.gtag) {
        if (import.meta.env.DEV) {
            console.warn('[Analytics] gtag not available');
        }
        return false;
    }

    const sendTo = `${GOOGLE_ADS_ID}/${label}`;

    window.gtag('event', 'conversion', { send_to: sendTo });

    if (import.meta.env.DEV) {
        console.log(`[Analytics] Conversion tracked: ${event} -> ${sendTo}`);
    }

    return true;
}

/**
 * Check if a conversion event is properly configured.
 * Useful for conditional rendering or debugging.
 */
export function isConversionConfigured(event: ConversionEvent): boolean {
    return Boolean(CONVERSION_CONFIG[event]);
}
