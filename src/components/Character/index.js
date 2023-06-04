import './Character.css'

const Character = ({nome, imagem,  dndClass, corDeFundo}) => {
    return(
        <div className='character'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{dndClass}</h5>
            </div>
        </div>
    )
}

export default Character