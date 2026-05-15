export default function decorate(block) {
  const rows = [...block.children];

  const body = rows[0]?.children[0]?.innerHTML || "";
  const code = rows[1]?.children[0]?.textContent?.trim() || "";
  const expiry = rows[2]?.children[0]?.textContent?.trim() || "";

  block.innerHTML = `
    <div class="promo-offer-inner">
      <p class="promo-offer-body">${body}</p>
      <div class="promo-offer-meta">
        <span class="promo-offer-code">
          Promo Code: <strong>${code}</strong>
        </span>
        <span class="promo-offer-divider" aria-hidden="true">|</span>
        <span class="promo-offer-expiry">
          Offer Expires: <strong>${expiry}</strong>
        </span>
      </div>
    </div>
  `;
}
