import Character from '../Character'
import './CharacterClass.css'

const CharacterClass = (props) =>{

    const css = { backgroundColor: props.corSecundaria }

    return (
        props.characters.length > 0 &&<section className='character-class' style={css}>
            
            <h3 style={{borderColor: props.corPrimaria}} >{props.nome}</h3>   
            <div className='personagems'>
                {props.characters.map( personagem => 
                    <Character 
                        corDeFundo={props.corPrimaria}
                        key={personagem.nome}
                        nome={personagem.nome} 
                        dndClass={personagem.dndClass} 
                        imagem={personagem.imagem}
                    />
                )}
            </div>
        </section>
    )
}//{props.personagems.map( personagems => <Character /> )}

export default CharacterClass