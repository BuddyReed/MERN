export default function Pokemanlist({ pokeman, displayPoke }) {

    // const { pokeman, displayPoke } = props



    return (
        <div>
            <input onClick={displayPoke} className='btn btn-dark' type='submit' />
            {pokeman.map((p, idx) => (
                <div key={idx} >
                    <h4>
                        {p.name}
                    </h4>
                </div>
            ))}
        </div>
    )
}
