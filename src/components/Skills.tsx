const Skills = () => {
  return (
    <section id="skills" className="file man" data-section>
      <div className="filehead">
        <span>skills.md</span>
        <span>man page</span>
      </div>

      <h3>NAME</h3>
      <p className="syn">abhiram — backend engineer, protocol tinkerer</p>

      <h3>SYNOPSIS</h3>
      <p className="syn">
        abhiram [--stack rust|python|typescript] [--focus crypto|a11y|foss]
      </p>

      <h3>OPTIONS — languages</h3>
      <dl className="opt-list">
        <dt>Rust</dt>
        <dd>Axum, SQLx — primary backend stack for Trinetra</dd>
        <dt>Python</dt>
        <dd>Flask, pandas, scikit-learn, NetworkX</dd>
        <dt>TypeScript / JS</dt>
        <dd>Node.js, npm SDK packaging</dd>
        <dt>C</dt>
        <dd>coursework and low-level exercises (lexical analyzers, etc.)</dd>
      </dl>

      <h3>OPTIONS — cryptography &amp; security</h3>
      <dl className="opt-list">
        <dt>Protocols</dt>
        <dd>X3DH, Double Ratchet, WebCrypto constraints (P-256 vs X25519)</dd>
        <dt>Threat modeling</dt>
        <dd>STRIDE-based, tracked as a living document</dd>
        <dt>Practice</dt>
        <dd>
          reads CVE writeups, fixes findings against a formal model rather than
          ad hoc
        </dd>
      </dl>

      <h3>OPTIONS — accessibility &amp; standards</h3>
      <dl className="opt-list">
        <dt>WCAG 2.2</dt>
        <dd>audit tooling shipped as Axis</dd>
        <dt>RPwD Act</dt>
        <dd>India's accessibility statute — built into Axis's rule set</dd>
      </dl>

      <h3>SEE ALSO</h3>
      <p className="syn">community.log(5), projects/(1)</p>
    </section>
  );
};

export default Skills;
