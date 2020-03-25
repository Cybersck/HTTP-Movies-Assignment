import React, {useState} from 'react';

const EditCard = props => {
  const { title, director, metascore, stars, id } = props.movie;
    let [form, setForm] = useState({title: title, director: director, metascore: metascore, stars: stars, id: id})

    const handleSubmit = e => {
        e.preventDefault();
        props.update(form);
        e.target.reset();

    }
    const handleChange = e => {
        switch(e.target.id) {
            case 'title':
                setForm({...form, title: e.target.value});
                break;
            case 'dir':
                setForm({...form, director: e.target.value});
                break;
            case 'score':
                setForm({...form, metascore: e.target.value});
                break;
        }

    }
  return (
      <form className='editForm' onSubmit={handleSubmit}>
    <div className="movie-card">
      <input id='title' type='text' placeholder={form.title} onChange={handleChange}/>
      <div className="movie-director">
        <input id='dir' type='text' placeholder={form.director} onChange={handleChange}/>
      </div>
      <div className="movie-metascore">
        <input id='score' type='number' placeholder={form.metascore} onChange={handleChange}/>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
    <button className='btn btn-success' type='submit'>Save</button>
    </form>
  );
};

export default EditCard;
