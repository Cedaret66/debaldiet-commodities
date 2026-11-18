/**
 * Automatically calculates the 70% initial deposit from any entered price string.
 * Handles single numbers, ranges, currency symbols (₵, GH₵, etc.) and text.
 * Always formats the output in Cedis (₵).
 * 
 * Examples:
 * "₵119,000 including shipping 🚢 " -> "₵83,300"
 * "108000" -> "₵75,600"
 * "₵120,000 – ₵150,000" -> "₵84,000 – ₵105,000"
 * "$34,500 Landed Tema" -> "₵24,150"
 */
export function calculate70PercentDeposit(priceStr) {
  if (!priceStr || typeof priceStr !== 'string') return '';

  // Extract all numbers (handles comma formatting e.g. 119,000)
  const matches = priceStr.match(/[\d,]+(?:\.\d+)?/g);
  if (!matches || matches.length === 0) return '';

  const cleanNumbers = matches
    .map((m) => parseFloat(m.replace(/,/g, '')))
    .filter((n) => !isNaN(n) && n > 0);

  if (cleanNumbers.length === 0) return '';

  // Always use Ghana Cedis (₵) as requested by user
  let currency = '₵';
  if (priceStr.includes('GH₵')) currency = 'GH₵ ';
  else if (priceStr.includes('GH¢')) currency = 'GH¢ ';
  else if (priceStr.toLowerCase().includes('ghs')) currency = 'GH₵ ';

  if (cleanNumbers.length === 1) {
    const val = cleanNumbers[0];
    const deposit = Math.round(val * 0.7);
    return `${currency}${deposit.toLocaleString()}`;
  }

  // If price is a range, e.g. "₵120,000 – ₵150,000"
  const dep1 = Math.round(cleanNumbers[0] * 0.7);
  const dep2 = Math.round(cleanNumbers[1] * 0.7);
  return `${currency}${dep1.toLocaleString()} – ${currency}${dep2.toLocaleString()}`;
}
