import React, { Component } from 'react'
import axios from 'axios'
import { filterByName,
         sortByFirstName,
         sortByLastName,
         shuffleList,
         getLastName,
         getFirstName } from '../utils'

// Styles
let styles = {
  appContainer: {
    width: '400px',
    margin: '0 auto 0 auto'
  },

  image: {
    width: '100px',
    height: '100px'
  },

  listContainer: {
    width: ' 100%',
    border: '1px solid black'
  }
}

// Class
export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      personList: [],
      visiblePersonList: []
    }
    this._onSearch = this._onSearch.bind(this)
    this._shuffleList = this._shuffleList.bind(this)
    this._sortByFirst = this._sortByFirst.bind(this)
    this._sortByLast = this._sortByLast.bind(this)
  }

  componentDidMount () {
    // AJAX Request for information
    fetch('https://willowtreeapps.com/api/v1.0/profiles/')
        .then(response => response.json())
        .then(list => this._handleResponse(list.items))
        .catch(error => console.error('There was an error!'))
  }
// Handle response
  _handleResponse (list) {
    this.setState({
      personList: list,
      visiblePersonList: list
    })
  }

  _shuffleList () {
    this.setState({
      visiblePersonList: shuffleList(this.state.personList)
    })
  }

  _sortByFirst () {
    this.setState({
      visiblePersonList: sortByFirstName(this.state.personList)
    })
  }

  _sortByLast () {
    this.setState({
      visiblePersonList: sortByLastName(this.state.personList)
    })
  }

  _onSearch (e) {
    this.setState({
      visiblePersonList: filterByName(e.target.value, this.state.personList)
    })
  }

  render () {
    return (
    <div className='app-container' style={styles.appContainer}>
      <input onChange={this._onSearch} ></input>
      <button onClick={this._shuffleList}>Shuffle</button>
      <button onClick={this._sortByFirst}>Sort (First Name)</button>
      <button onClick={this._sortByLast}>Sort (Last Name)</button>
      <table className='list-container' style={styles.listContainer}>
      <thead>
        <tr>
          <th>Thumbnail</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
       {this.state.visiblePersonList !== [] ? this.state.visiblePersonList.map((person, i) => <tr key={i}>
            <td><img className='image' src={person.headshot.url} style={styles.image}/></td>
            <td>{getFirstName(person.firstName)}</td>
            <td>{getLastName(person.lastName)}</td>
          </tr>) : null}
      </tbody>
    </table>
    </div>
    )
  }
}
