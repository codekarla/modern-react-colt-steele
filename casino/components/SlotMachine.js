import styles from '../styles/SlotMachine.module.css';

export default function SlotMachine({ cats }) {
    return (
        <section className={styles.slotmachine}>
            {cats.length &&
                cats.map((cat, i) => (
                    <div key={`meow--${i}--${cat}`}>
                        <img src={`../catpics/${cat}.jpg`} />
                    </div>
                ))}
        </section>
    );
}
