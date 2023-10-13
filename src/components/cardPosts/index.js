import Link from 'next/link'
import Image from 'next/image'
import styles from './cardPosts.module.css'

export default function cardPosts({ imagem, titulo, data, previa, autor}) {

  var dataForm;
  dataForm = data.substring(8, 10) + '/' + data.substring(5, 7) + '/' + data.substring(0, 4);

  // console.log(imagem);
  

  return (
    <>
      <Link href="/blog" target="_blank" className={styles.link}>
        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.img}>
              <Image
                src={imagem}
                fill
                style={{objectFit: 'cover'}}
                alt="Post"
              />
            </div>
            <div className={styles.dados}>
              <div className={styles.emCima}>
                <h2 className={styles.titulo}>{titulo}</h2>
                <hr className={styles.linha} />
                <p className={styles.previa}>{previa}</p>
              </div>
              <div className={styles.embaixo}>
                <span className={styles.data}>{dataForm}</span>
                <span className={styles.autor}>{autor}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}