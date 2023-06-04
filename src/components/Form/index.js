import { useState } from 'react'
import Button from '../Button/Button'
import DropDown from '../DropDown'
import TextField from '../TextField'
import './Form.css'

export const Form = (props) => {

    const DndRace = [
        "Anão",
        "Elfo",
        "Halfling",
        "Humano",
        "Dragão",
        "Gnomo",
        "Meio-elfo",
        "Meio-orc",
        "Tiefling",
        "Genasi",
        "Aarakocra",
        "Tritão",
        "Goliath",
        "Tabaxi",
        "Firbolg",
        "Kenku",
        "Yuan-Ti",
        "Warforged",
        "Tortle",
        "Centauro",
        "Minotauro",
    ]

    const [nome, setNome] = useState('')
    const [nivel, setNivel] = useState('')
    const [imagem, setImagem] = useState('')
    const [dndClass, setDndClass] = useState('')
    const [dndRace, setDndRace] = useState('')

    const onSave = (event) =>{
        event.preventDefault()
        props.aoPersonagemCadastrado({
            nome: nome,
            nivel: nivel,
            imagem: imagem,
            dndClass: dndClass,
            dndRace: dndRace
        })
        //limpar campos do form
        setNome('')
        setNivel('')
        setImagem('')
        setDndClass('')
        setDndRace('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do personagem</h2>
                <TextField mandatory={true} label="Nome do personagem" placehoder="Digite o nome do personagem" valor={nome} aoAlterado={valor => setNome(valor)}/>
                <TextField mandatory={true} label="Digite o nível" placehoder="Digite o nome do personagem" valor={nivel} aoAlterado={valor => setNivel(valor)}/>
                <TextField label="Imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <DropDown itens={props.charactersClass} label='Classe' valor={dndClass} aoAlterado={valor => setDndClass(valor)}/>
                <DropDown itens={DndRace} label='Raça' valor={dndRace} aoAlterado={valor => setDndRace(valor)}/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}