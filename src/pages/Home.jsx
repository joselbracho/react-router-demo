import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { retriveCars } from '../api';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    };
  }

  componentDidMount() {
    retriveCars()
      .then((res) => this.setState({ cars: res }))
      .catch((err) => {
        throw new Error(err);
      });
  }

  render() {
    const { cars } = this.state;

    return (
      <main>
        <h2 className="title-page">My Car List</h2>
        <div className="card-container">
          {cars.map((car) => (
            <Link key={car.id} to={`/car/${car.id}/`} className="card">
              <figure>
                <img src={car.image} alt={car.model} />
              </figure>
              <div className="card-details">
                <p>
                  <b>Brand:</b> {car.brand}
                </p>
                <p>
                  <b>Model:</b> {car.model}
                </p>
                <p>
                  <b>Year:</b> {car.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    );
  }
}

export default Home;
