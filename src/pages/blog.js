import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/blog.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import GridPosts from '@/components/gridPosts'
import { handleJSONfiles } from '../utils/functions/jsonHandler'
import { handleJSONfile } from '../utils/functions/jsonHandler'
import MenuBlog from '@/components/menuBlog/menuBlog'
import CarrosselBlog from '@/components/carrosselBlog'

export default function blog({posts, nav, foo}) {
  // console.log(posts.imagem);
  // console.log(posts);

  const navData = {
    logo : nav.logo,
    linkedin : nav.linkedin,
    instagram : nav.instagram,
    email : nav.email
  };

  return (
    <>
      <Navbar  {...navData}/>
      <CarrosselBlog {...posts}/>  
      <MenuBlog {...posts}/>
      <Footer {...foo}/>
    </> 
  );
}


export async function getStaticProps() {
  const caminho2 = "navFooter";
  const pagina2 = "navbar";

  const pagina3 = "footer";
  const foo = handleJSONfile(`./content/${caminho2}/${pagina3}.json`);




  const posts = handleJSONfiles('./content/posts')
  const nav = handleJSONfile(`./content/${caminho2}/${pagina2}.json`);
  return {
    props: { posts, nav, foo },
  };
}
