import { useState } from 'react'
import Styles from './menuBlog.module.css'
import CardPosts from '../cardPosts'
import GridPosts from '../gridPosts'
import { GoChevronDown } from "react-icons/go";



export default function MenuBlog(...posts) {
    const [isActive, setIsactive] = useState(false)
    const [titulo, setTitulo] = useState("TODOS")
    const [atual, setAtual]  = useState(false)

    posts = posts[0]
    var genderSelection = []
    var arrPosts = [];

    for (const i in posts) {
        arrPosts.push(posts[i]);
    }

    const [filteredPosts, setFilteredPosts] = useState(arrPosts)

    arrPosts.map((arrPosts) => { genderSelection.push(arrPosts.genero) });
    const filteredgenders = [...new Set(genderSelection)];

    const filter = (select, arrPosts) => {

        let aux = arrPosts;
        (select == "TODOS") ? aux = arrPosts :
            aux = arrPosts.filter((obj) => obj.genero == select)

        setFilteredPosts(aux)
        setTitulo(select)
        setIsactive(false)
        setAtual(select)
        
    }

    const RenderOptions = () => {
        return (
            
            <>
                <li key={'todos'} tabIndex={0} className={Styles.teste}>
                    <button className={atual === "TODOS"? Styles.active: Styles.button} onClick={() => filter("TODOS", arrPosts)} tabIndex={0} > Todos </button>
                </li>
                {filteredgenders.map((filteredgenders) => (
                    <li key={filteredgenders.titulo}>
                        <button className={atual === filteredgenders? Styles.active: Styles.button} onClick={() => { filter(filteredgenders, arrPosts) }}>
                            {filteredgenders}
                        </button>
                    </li>
                ))}
            </>)

    }


    return (
        <>
            <div className={Styles.container}>  {/* div que engloba todo o componente */}
                <div className={Styles.menuContainer}> {/* div que engloba apenas a parte do menu */}
                    <ul className={Styles.lista}>

                        <div className={Styles.containerMobile}>  {/* div mobile */}
                           <div className={Styles.tituloEBotaoMobile}>
                            <h3 className={Styles.tituloMobile} ><p>{titulo}</p></h3>
                            <h4 className={Styles.optionButton} onClick={() => setIsactive(!isActive)}><GoChevronDown size={'30'}/></h4>
                                
                            </div>
                           <div className={Styles.optionsMobile}> {isActive && (<RenderOptions />)}</div>                        
                        </div>

                        <div className={Styles.containerDesktop}> {/* div desktop */}                           
                            <RenderOptions />                        
                        </div>
                    </ul>
                </div>
                <div className={Styles.gridPosts}>
                <GridPosts {...filteredPosts} />
                </div>
            </div>
        </>
    )
}