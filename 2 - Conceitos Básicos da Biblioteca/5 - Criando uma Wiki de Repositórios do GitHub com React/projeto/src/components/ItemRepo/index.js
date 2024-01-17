import { ItemContainer } from "./styles";

const ItemRepo = ({repo, onClick}) =>{

    const handleRemove = () => {
        onClick(repo.id);
    }

    return (
        <ItemContainer>
            <h3>
                {repo.name}
            </h3>
            <p>
                {repo.full_name}
            </p>
            <div>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" ><button>Ver repositório</button></a>
                <button onClick={handleRemove}>Remover repositório</button>
            </div>
            <hr/>
        </ItemContainer>
    )
}

export default ItemRepo;