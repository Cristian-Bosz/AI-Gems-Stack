/**
 * Extrayendo el dominio de una URL.
 * Ej: "https://cursor.com" -> "cursor.com"
 */
export const getDomainFromUrl = (url) => {
  try {
    const domain = new URL(url).hostname;
    return domain.replace('www.', '');
  } catch (error) {
    console.error("Error parsing URL:", url, error);
    return null;
  }
};

/**
 * Generando la URL de logo.dev para un dominio.
 */
export const getLogoUrl = (domain) => {
  if (!domain) return null;
  const apiKey = import.meta.env.VITE_LOGO_DEV_API_KEY;
  return `https://img.logo.dev/${domain}?token=${apiKey}`;
};
