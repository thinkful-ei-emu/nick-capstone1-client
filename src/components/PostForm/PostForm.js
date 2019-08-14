import React from 'react';
import Lists from '../../Utils/Lists';
import PostApiService from '../../services/PostApiService';
import './PostForm.css';



class PostForm extends React.Component {
  static defaultProps = {
    onPostSuccess: () => {}
  }

  state = {
    error: null, 
  }


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
      <form onSubmit={this.handleSubmitPost} className='post-form'>
        <div className='post-form-container'>
        <div className='post-form-row'>
          <label htmlFor='post_type'><strong>Project type: </strong></label>
          <select name='post_type' id='post_type' defaultValue='' required className='post-select'>
          <option value='' disabled >Choose type</option>
            {post_type}
          </select>
        </div>
        <div className='post-form-row'>
          <label htmlFor='location'><strong>Location: </strong></label>
          <select name='location' id='location' defaultValue='' required className='post-select'>
          <option value='' disabled >Choose location</option>
            {location}
          </select>
        </div>
        <div className='post-form-row'>
          <label htmlFor='style'><strong>Style/Genre: </strong></label>
          <select name='style' id='style' defaultValue='' required className='post-select'>
          <option value='' disabled >Choose Style</option>
            {style}
          </select>
        </div>
        <div className='post-form-row'>
          <label htmlFor='instruments_need'><strong>Instruments Needed: </strong></label>
          <select name='instruments_need' id='instruments_need' multiple size='8' className='post-select instrument-select' required>
                {instruments}
          </select>
        </div>
        <div className='post-form-row'>
          <label htmlFor='commitment'><strong>Available Hours (weekly): </strong></label>
          <select name='commitment' id='commitment' required className='post-select'>
            {commitment}
          </select>
        </div>
        <div className='post-form-row'>
          <label htmlFor='skill_lvl'><strong>Desired Skill: </strong></label>
          <select name='skill_lvl' id='skill_lvl' defaultValue='' required className='post-select'>
          <option value='' disabled >Choose skill</option>                
            {skill_lvl}
          </select>
        </div>
        <div className='post-form-row'>
          <label htmlFor='description'><strong>Description: </strong></label>
          <textarea 
          name='description' 
          id='description' 
          cols='40' 
          rows='4'
          placeholder='Describe your project idea (400 characters or less)'
          maxLength='400'
          className='description-text'
          required >
          </textarea>
        </div>
        <button type='submit' className='post-form-button'>Start your project!</button>
        </div>
      </form>
    )
  }
}

export default PostForm;