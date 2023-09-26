import Link from 'next/link'
import Image from 'next/image'
import styles from './cardMembros.module.css'

export default function cardMembros({ nome, posicao, imagem, linkedin }) {
  return (
    <>
      <Link href={linkedin} target="_blank" className={styles['link']}>
        <div className={styles['container']}>
          <div className={styles['box']}>
            <h3 className={styles['nome']}>{nome}</h3>
            <p className={styles['posicao']}>{posicao}</p>
            <div className={styles['img']}>
              <Image
                src={imagem}
                fill
                style={{objectFit: 'cover'}}
                alt='Foto Membro'
                />
              </div>
          </div>
        </div>
      </Link>
    </>
  );
}