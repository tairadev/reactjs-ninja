import React, { Component } from "react";

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: "Valor inicial",
      checked: false,
      checkedRadio: false,
      selected: "3",
      text: "Batata frita 123"
    }
  }

  render() {
    return (
      <div>
        <form 
          onSubmit={ (e) => { 
            e.preventDefault()
            alert('Enviado!')
          } }
          onChange={ (e) => {
            console.log("name", e.target.name)
            console.log("value", e.target.value)
          } }
        >
          <input 
            name="text" 
            type="text" 
            value={this.state.value} 
            onChange={ (e) => {
              this.setState({
                value: e.target.value
              });
            }} 
          />

          <br />
          <br />

          <input name="text" type="text" defaultValue="Valor inicial sem controle" />

          <br />
          <br />

          <label>
            <input
              name="check" 
              type="checkbox" 
              checked={this.state.checked} 
              onChange={ (e) => {
                this.setState({
                  checked: e.target.checked
                })
              }}
            />
            Checkbox
          </label>

          <br />
          <br />

          <label>
            <input 
              name="check2"
              type="checkbox" 
              defaultChecked={true} 
            />
            Checkbox
          </label>

          <br />
          <br />

          <input type="radio" name="rd" value="1" defaultChecked /> Radio 1
          <input type="radio" name="rd" value="2" /> Radio 2
          <br />
          <br />

          <select value={this.state.selected} 
            onChange={ (e) => {
              this.setState({
                selected: e.target.selected
              })
            } }
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          <br />
          <br />

          <textarea 
            value={this.state.text} 
            onChange={ (e) => {
              this.setState({
                text: e.target.value
              })
            } }
          />

          <br />
          <br />

          <input type="submit" value="Enviar" />
        </form>
      </div>
    )
  }
}

export default App;
