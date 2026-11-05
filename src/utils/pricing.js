/**
 * Automatically calculates the 70% initial deposit from any entered price string.
 * Handles single numbers, ranges, currency symbols ($, GH₵, etc.) and text.
 * 
 * Examples:
 * "$34,500 Landed Tema" -> "$24,150"
 * "28000" -> "$19,600"
 * "$38,000 – $42,000" -> "$26,600 – $29,400"
 * "GH₵ 500,000" -> "GH₵ 350,000"
 */
export function calculate70PercentDeposit(priceStr) {
  if (!priceStr || typeof priceStr !== 'string') return '';

  // Detect currency prefix
  let currency = '$';
  if (priceStr.includes('GH₵')) currency = 'GH₵ ';
  else if (priceStr.toLowerCase().includes('ghs')) currency = 'GH₵ ';
  else if (priceStr.includes('€')) currency = '€';
  else if (priceStr.includes('£')) currency = '£';
  else if (priceStr.includes('$')) currency = '$';

  // Match all numbers (handles comma formatting e.g. 34,500 or 34500)
  const matches = priceStr.match(/[\d,]+(?:\.\d+)?/g);
  if (!matches || matches.length === 0) return '';

  const cleanNumbers = matches
    .map((m) => parseFloat(m.replace(/,/g, '')))
    .filter((n) => !isNaN(n) && n > 0);

  if (cleanNumbers.length === 0) return '';

  if (cleanNumbers.length === 1) {
    const val = cleanNumbers[0];
    const deposit = Math.round(val * 0.7);
    return `${currency}${deposit.toLocaleString()}`;
  }

  // If price is a range, e.g. "$38,000 – $42,000"
  const dep1 = Math.round(cleanNumbers[0] * 0.7);
  const dep2 = Math.round(cleanNumbers[1] * 0.7);
  return `${currency}${dep1.toLocaleString()} – ${currency}${dep2.toLocaleString()}`;
}
