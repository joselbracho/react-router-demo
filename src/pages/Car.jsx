import { useEffect, useState, React } from 'react';
import { Link, useParams } from 'react-router-dom';
import { retriveCar } from '../api';

function Car() {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    retriveCar(id)
      .then((res) => setCar(res))
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <main>
      <nav>
        <Link to="/">Back to Home &#9166;</Link>
      </nav>
      <div className="card-detail">
        <figure>
          <img src={car.image} alt={car.model} />
        </figure>
        <p>
          <b>Brand:</b> {car.brand}
        </p>
        <p>
          <b>Model:</b> {car.model}
        </p>
        <p>
          <b>Year:</b> {car.year}
        </p>
        <p>
          <b>Color:</b> {car.color}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique fugit rem eaque
          maiores! Libero nisi quasi eum voluptas nemo expedita enim hic asperiores earum quae
          perspiciatis mollitia, in velit delectus.
        </p>
      </div>
    </main>
  );
}
export default Car;
