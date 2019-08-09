import React from 'react';
import Lists from '../../Utils/Lists';
import PostApiService from '../../services/PostApiService';



class PostForm extends React.Component {
  static defaultProps = {
    onPostSuccess: () => {}
  }

  state = {
    error: null,
  }


  // handleChangeInstrument = (instrument) => {
  //   console.log(instrument)
  //   this.setState(prevState => {
  //     const newState = prevState;
  //     if(prevState.instruments[instrument]){
  //       newState.instruments[instrument] = false;
  //     }
  //     else {
  //       newState.instruments[instrument] = true;
  //     }
  //     return newState;
  //   }, () => console.log(this.state))
  // }

  handleSubmitPost = ev => {
    ev.preventDefault()
    const {post_type, location, style, instruments_need, commitment, skill_lvl, description} = ev.target;

    let selectedIntstruments = [...instruments_need.options].filter(option => option.selected === true).map(option => option.value);
    let selectInstrumentString = selectedIntstruments.join(' ');
    this.setState({error: null})
    const newPost = {
      post_type: post_type.value,
      location: location.value,
      style: style.value,
      commitment: commitment.value,
      skill_lvl: skill_lvl.value,
      instruments_need: selectInstrumentString,
      description: description.value,
    }
    PostApiService.makePost(newPost)
      .then(() => {
        description.value = '';
        this.props.onPostSuccess();
      })
      .catch(e => this.setState({error: e.message}))


   
  }

  handleInputOptions = inputs => {
    return inputs.map((input, key) => <option key={key}value={input}>{input}</option>)
}

  render(){
    const post_type = this.handleInputOptions(Lists.post_type);
    const location = this.handleInputOptions(Lists.locationOptions);
    const style = this.handleInputOptions(Lists.styles);
    const instruments = this.handleInputOptions(Lists.instrumentOptions);
    const commitment = this.handleInputOptions(Lists.commitment);
    const skill_lvl = this.handleInputOptions(Lists.skillLvls);

    return (
      <form onSubmit={this.handleSubmitPost}>
        <div>
          <label htmlFor='post_type'>Project type: </label>
          <select name='post_type' id='post_type'>
            {post_type}
          </select>
        </div>
        <div>
          <label htmlFor='location'>Location: </label>
          <select name='location' id='location'>
            {location}
          </select>
        </div>
        <div>
          <label htmlFor='style'>Style or Genre:</label>
          <select name='style' id='style'>
            {style}
          </select>
        </div>
        <div>
          <label htmlFor='instruments_need'>Instruments Needed:</label>
          <select name='instruments_need' id='instruments_need' multiple size='8' required>
                {instruments}
          </select>
        </div>
        <div>
          <label htmlFor='commitment'>Hours per week: </label>
          <select name='commitment' id='commitment'>
            {commitment}
          </select>
        </div>
        <div>
          <label htmlFor='skill_lvl'>Desired Skill: </label>
          <select name='skill_lvl' id='skill_lvl'>
            {skill_lvl}
          </select>
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <textarea 
          name='description' 
          id='description' 
          cols='20' 
          rows='3'
          placeholder='Describe your project idea (400 characters or less)'
          maxLength='400'
          required >
          </textarea>
        </div>
        <button type='submit'>Start your project!</button>
      </form>
    )
  }
}

export default PostForm;