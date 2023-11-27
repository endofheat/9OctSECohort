import { useState, useEffect } from 'react';
/* import { useData } from '../hooks/useData';
import { useUserProvider } from '../context/UserContext'; */

function ActivityFinder () {
  // Fetches a random activity
  const [participants, setParticipants] = useState(1)
  const [activity, setActivity] = useState('')
  const [type, setType] = useState('diy')

  useEffect(() => {
    const fetchUrl = 'https://www.boredapi.com/api/activity?' + 'participants=' + participants + '&type=' + type
    console.log(fetchUrl)
    let ignore = false

    fetch(fetchUrl)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        // if we have done cleanup this an outdated activity, so ignore it
        if (!ignore) setActivity(json.error ? json.error : json.activity)
      })

    /*  useEffect(() => {
    fetch('https://www.boredapi.com/api/activity?' + 'participants=' + participants + '&type=' + type )
    .then(response => response.json())
    .then(json => {
    setActivity(json.activity);
    });
    }, [participants]); */

    /* useEffect(() => {
    console.log('running effect');
    let ignore = false; // flag to allow ignoring of the fetch result

    fetch('https://www.boredapi.com/api/activity?' +

    'participants=' + participants)
    .then(response => response.json())
    .then(json => {
    // only update state if the effect is still valid
    // ie. the dependency hasn't changed since the request
    if (!ignore) setActivity(json.activity);
    }); */

    // cleanup function - runs when unmounted or dependencies change
    return () => {
      ignore = true // ignore now invalid fetch results
      console.log('cleanup effect')
    }
  }, [participants, type])

  return (
    <div className='ActivityFinder componentBox'>
      <h3>Activity Finder</h3>

      <label>
        Choose number of participants:
        <select
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>{' '}

      <label>
        Choose type of activity: {' '}

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >

          <option>education</option>
          <option>recreational</option>
          <option>social</option>
          <option>diy</option>
          <option>charity</option>
          <option>cooking</option>
          <option>relaxation</option>
          <option>music</option>
          <option>busywork</option>

        </select>
      </label>

      <div>
        <strong>Suggested Activity: </strong>
        {activity}
      </div>
    </div>
  )
}

export default ActivityFinder
