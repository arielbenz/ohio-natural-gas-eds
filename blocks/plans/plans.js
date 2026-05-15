export default function decorate(block) {
  const cols = [...block.children[0].children];

  const plans = cols.map((col) => {
    const paras = [...col.querySelectorAll("p")];
    const price = paras[0]?.textContent?.trim() || "";
    const term = paras[1]?.textContent?.trim() || "";
    const desc = paras[2]?.innerHTML || "";
    const cta = col.querySelector("a, em, strong");

    return { price, term, desc };
  });

  block.innerHTML = `
    <div class="plans-grid">
      ${plans
        .map(
          (plan) => `
        <div class="plan-card">
          <div class="plan-card-header">
            <div class="plan-price">${plan.price}</div>
            <div class="plan-term">${plan.term}</div>
          </div>
          <div class="plan-card-body">
            <p class="plan-desc">${plan.desc}</p>
            <details class="plan-additional">
              <summary>+ Additional Information</summary>
              <p>Early termination charges may apply.
                 See terms and conditions for full details.</p>
            </details>
            
              href="/enroll?code=FIREDUP"
              class="plan-cta"
            >
              SELECT PLAN
            </a>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
}
