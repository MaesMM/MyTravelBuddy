import styles from "./System.module.scss";

const System = () => {
  return (
    <div className="page">
      <div className={styles.bigSection}>
        <h1 className="title underline">Components :</h1>
        <section className="row space-between flex-start">
          <div className={styles.section}>
            <h1 className={styles.title}>Text :</h1>
            <div class="column">
              <h1>Heading 1</h1>
              <h1 className="underline">Underline</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>

              <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur reprehenderit deleniti modi velit numquam, eum
                suscipit asperiores voluptas commodi quis, consectetur itaque
                iste incidunt officiis dolorem vitae. Eos doloremque animi
                maxime similique expedita asperiores in! Ipsam facere culpa
                quibusdam dolore vitae nemo sint. Temporibus, officiis.
              </p>
              <span class="error">This is an error message</span>
            </div>
          </div>
          <div className={styles.section}>
            <h1 className={styles.title}>Buttons :</h1>
            <div className="column flex-start">
              <button className="primary-btn">Primary button</button>
              <button className="primary-btn full-width">Full width</button>
              <a href="#" className="primary-btn">
                Primary (a)
              </a>
              <a className="secondary-btn">secondary button</a>
              <button className="secondary-btn disabled">
                secondary button
              </button>
              <button className="primary-btn disabled">Primary button</button>
            </div>
          </div>

          <div className={styles.section}>
            <h1 className={styles.title}>Form fields :</h1>
            <div className="column">
              <input className="input" type="text" placeholder="Text input" />
              <select className="select">
                <option selected disabled>
                  Select
                </option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.bigSection}>
        <h1 className="title underline">Positioning :</h1>
        <section className={styles.section}>
          <div className={`row space-between ${styles.positioningRow}`}>
            <div className={"full-width " + styles.red}>100%</div>
          </div>
          <div className={`row space-between ${styles.positioningRow}`}>
            <div className={"half " + styles.red}>1/2</div>
            <div className={"third " + styles.yellow}>1/3</div>
            <div className={"remainder " + styles.blue}>Remainder</div>
          </div>
          <div className={`row space-between ${styles.positioningRow}`}>
            <div className={"two-thirds " + styles.red}>2/3</div>
            <div className={"third " + styles.yellow}>1/3</div>
          </div>
          <div className={`row space-between ${styles.positioningRow}`}>
            <div className={"three-quarters " + styles.red}>3/4</div>
            <div className={"quarter " + styles.yellow}>1/4</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default System;
