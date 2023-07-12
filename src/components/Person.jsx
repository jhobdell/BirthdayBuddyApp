const Person = ({name, age, image}) => {
  
  return (
    <article>
                  <img src={image} alt={name} className="img" />
                  <h4>{name}</h4>
                  <p>{age} years</p>
    </article>
  )
}

export default Person;