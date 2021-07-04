import Image from 'next/image';
import styles from '../styles/SlotMachine.module.css';

export default function SlotMachine({ cats }) {
    return (
        <section className={styles.slotmachine}>
            {cats.length &&
                cats.map((cat, i) => (
                    <div key={`cat-${i}-${cat.id}`}>
                        <Image
                            src={cat.url}
                            width={cat.width}
                            height={cat.height}
                            layout='intrinsic'
                            objectFit='cover'
                            objectPosition='center center'
                        />
                    </div>
                ))}
        </section>
    );
}
