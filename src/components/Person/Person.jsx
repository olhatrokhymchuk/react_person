export const Person = ({ person }) => {
  const { name, age, married, gender, partner } = person;
  const partnerLabel = gender === 'male' ? 'wife' : 'husband';
  const displayPartner = partner || 'unknown';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {married ? (
        <p className="Person__partner">
          {displayPartner} is my {partnerLabel}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
