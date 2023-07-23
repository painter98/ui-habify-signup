import React from 'react'
import logo from '../image/EFA_Registered Logo.png'

function Main() {
  return (
    <main className='m-auto flex flex-col align-middle justify-center'>
        <div className='content-circle'>
          <div className='bg-slate-200 semicircle relative'>
            <img src={logo} alt='registered logo' className='reg_logo'/>
            <div className='text-center relative top-12 left-14 w-5/6'>
              <h1 className='text-2xl font-medium'>Create a Emotional First Aid - Enabler Account</h1>
              <p>By Signup you can start posting, replaying to topics, earn badges, favourite, vote topics and many more</p>
            </div>
          </div>
        </div>
        <div className='content bg-white'>
          <form className='details flex flex-col p-8 gap-5'>
              <div className='grid grid-cols-2 gap-10'>
                <div>
                  <label htmlFor='fname'>First Name</label>
                  <br/>
                  <input id='fname' placeholder='enter your first name' className='full border-b-2 border-slate-200 p-3 outline-none'/>
                </div>
                <div>
                  <label htmlFor='lname'>Last Name</label>
                  <br/>
                  <input id='lname' placeholder='enter your last name' className='full border-b-2 border-slate-200 p-3 outline-none'/>
                </div>
              </div>
              <div>
                <label htmlFor='username'>User Name</label>
                  <br/>
                <input id='username' placeholder='enter your user name' className='full border-b-2 border-slate-200 p-3 outline-none'/>
              </div>
              <div>
                <label htmlFor='email'>Email Address</label>
                  <br/>
                <input id='email' placeholder='enter your email address' className='full border-b-2 border-slate-200 p-3 outline-none'/>
              </div>
              <div>
                <label htmlFor='password'>Password</label>
                  <br/>
                <input id='password' type='password' placeholder='enter your user name' className='full border-b-2 border-slate-200 p-3 outline-none'/>
              </div>
              <div className='relative'>
                <span>Privacy Settings (OPTIONAL)</span>
                <hr/>
                <img src='https://thumbs.dreamstime.com/b/icon-smiling-baby-color-mate-style-simple-illustration-design-template-vector-good-prints-posters-advertisements-announcements-252284637.jpg' alt='Privacy settings' 
                    className='anime absolute top-0' />
              </div>
              <div classname='privacy-content'>
                <br/>
                <div>Who can see my Profile?</div>
                <div className='flex flex-wrap gap-5 my-2'>
                  <div className='border border-slate-400 p-2'>
                    <input type='checkbox'/> 
                    <label className='text-black'> Everyone</label>
                  </div>
                  <div className='border border-slate-400 p-2'>
                    <input type='checkbox'/>
                    <label className='text-black'> Only Friends</label>
                  </div>
                  <div className='border border-slate-400 p-2'>
                    <input type='checkbox'/>
                    <label className='text-black'> Invites Only</label>
                  </div>
                </div>
                <br/>
                <div>Automatically share my posts and replies on social media</div>
                <div className='flex flex-wrap gap-5 my-2'>
                  <div className='border border-slate-400 p-2 w-30 space-x-2'>
                    <input type='checkbox'/> 
                    <label className='text-black'>
                        <img className='logo' src='https://th.bing.com/th/id/OIP.y1Di-i7rZBc7fL6m-KcFRgHaHa?pid=ImgDet&rs=1' alt='facebook logo'/> Facebook
                    </label>
                  </div>
                  <div className='border border-slate-400 p-2 space-x-2'>
                    <input type='checkbox'/>
                    <label className='text-black'>
                        <img className='logo' src='https://th.bing.com/th/id/OIP.o06snWh5G4LQ1fJbNlarpAHaGB?pid=ImgDet&rs=1' alt='twitter logo'/> Twitter
                    </label>
                  </div>
                  <div className='border border-slate-400 p-2 space-x-2'>
                    <input type='checkbox'/>
                    <label className='text-black'>
                        <img className='logo' src='https://www.derustit.com/images/social/googleplus.png' alt='google logo'/> Google+
                    </label>
                  </div>
                </div>
              </div>
              <div className='survey space-y-5'>
                <div className='relative'>
                  <span>Small Survey (OPTIONAL)</span>
                  <hr/>
                  <img src='https://cdn3.iconfinder.com/data/icons/email-111/48/45-512.png' alt='small survey' className='anime absolute top-0'/>
                </div>
                <div className='survey-content grid grid-cols-2 gap-10 outline-none'>
                <div>
                  <label htmlFor='age'>How old are you?</label>
                  <br/>
                  <select id='age' className='border-b-2 pb-3'>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                  </select>
                </div>
                <div>
                  <label htmlFor='gender'>Who are you?</label>
                  <br/>
                  <select id='gender' className='border-b-2 pb-4'>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </select>
                </div>
                <div>
                  <label htmlFor='friend'>Will you be friendly here?</label>
                  <br/>
                  <select id='friend' className='border-b-2 pb-4'>
                    <option>Yes</option>
                    <option>Quiet friendly</option>
                    <option>No</option>
                  </select>
                </div>
                <div>
                  <label htmlFor='hear'>where do you heard about us?</label>
                  <br/>
                  <select id='hear' className='border-b-2 pb-4'>
                    <option>By Search Engine</option>
                    <option>By Social Media</option>
                    <option>By Friends</option>
                  </select>
                </div>
                </div>
              </div>
              <div className='link space-y-5'>
                <div className='relative'>
                  <span>Link Social Networks (OPTIONAL)</span>
                  <hr/>
                  <img src='https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/79-512.png' alt='link social networks' className='anime absolute top-0'/>
                </div>
                <div className='link-content grid grid-cols-2 gap-10 outline-none'>
                <div>
                  <img className='logo' src='https://th.bing.com/th/id/OIP.y1Di-i7rZBc7fL6m-KcFRgHaHa?pid=ImgDet&rs=1' alt='facebook logo'/>
                  <label htmlFor='furl'> Facebook URL</label>
                  <br/>
                  <input type='text' className='full outline-none border-b-2 border-slate-200 p-3' id='furl'/>
                </div>
                <div>
                  <img className='logo' src='https://th.bing.com/th/id/OIP.o06snWh5G4LQ1fJbNlarpAHaGB?pid=ImgDet&rs=1' alt='twitter logo'/>
                  <label htmlFor='twitter'> Twitter UserName</label>
                  <br/>
                  <input type='text' id='twitter' className='full outline-none border-b-2 border-slate-200 p-3'/>
                </div>
                <div>
                <img className='logo' src='https://www.derustit.com/images/social/googleplus.png' alt='google logo'/>
                  <label htmlFor='account'> Google+ account</label>
                  <br/>
                  <input type='text' id='account' className='full outline-none border-b-2 border-slate-200 p-3'/>
                </div>
                <div>
                  <img src='https://th.bing.com/th/id/OIP.3rSTYI2unlM-9raJQJW3lwHaHa?pid=ImgDet&rs=1' alt='youtube logo' className='youtube logo'/>
                  <label htmlFor='youtube'> Youtube Channel URL</label>
                  <br/>
                  <input type='text' id='youtube' className='full outline-none border-b-2 border-slate-200 p-3'/>
                </div>
                </div>
              </div>
              <div className='interested-catagories'>
                <div>
                  <span>Interested Catagories (OPTIONAL)</span>
                  <hr/>
                </div>
                <br/>
                <div className='coloring'>Catagories I'm interested in</div>
                <div className='interested-content flex flex-wrap gap-10 my-5 justify-start text-center'>
                  <div className='interest border border-slate-400 p-2'>
                    <input type='checkbox'/> 
                    <label className='text-black'> Select All</label>
                  </div>
                  <div className='interest border border-slate-400 p-2'>
                    <input type='checkbox'/>
                    <label className='text-black'> Mental Health</label>
                  </div>
                  <div className='interest border border-slate-400 p-2'>
                    <input type='checkbox'/>
                    <label className='text-black'> MH Tips</label>
                  </div>
                  <div className='interest border border-slate-400 p-2'>
                    <input type='checkbox'/>
                    <label className='text-black'> Support</label>
                  </div>
                  <div className='interest border border-slate-400 p-2'>
                    <input type='checkbox'/>
                    <label className='text-black'> Enabler</label>
                  </div>
                  <div className='interest border border-slate-400 p-2'>
                    <input type='checkbox'/>
                    <label className='text-black'> Exchange</label>
                  </div>
                  <div className='interest border border-slate-400 p-2'>
                    <input type='checkbox'/>
                    <label className='text-black'> Art</label>
                  </div>
                  <div className='interest border border-slate-400 p-2'>
                    <input type='checkbox'/>
                    <label className='text-black'> Q&A</label>
                  </div>
                  <div className='interest border border-slate-400 p-2'>
                    <input type='checkbox'/>
                    <label className='text-black'> Social</label>
                  </div>
                  <div className='interest border border-slate-400 p-2'>
                    <input type='checkbox'/>
                    <label className='text-black'> Random</label>
                  </div>
                  <div className='interest border border-slate-400 p-2'>
                    <input type='checkbox'/>
                    <label className='text-black'> Music</label>
                  </div>
                  <div className='interest border border-slate-400 p-2'>
                    <input type='checkbox'/>
                    <label className='text-black'> Science</label>
                  </div>
                  <div className='interest border border-slate-400 p-2'>
                    <input type='checkbox'/>
                    <label className='text-black'> Pets</label>
                  </div>
                  <div className='interest border border-slate-400 p-2'>
                    <input type='checkbox'/>
                    <label className='text-black'> Education</label>
                  </div>
                  <div className='interest border border-slate-400 p-2'>
                    <input type='checkbox'/>
                    <label className='text-black'> Video</label>
                  </div>
                </div>
              </div>
              <div className='flex justify-around coloring'>
                <span>
                  <input type='checkbox' required='true'/> I agree to Terms and Conditions
                </span>
                <span>
                  <input type='checkbox' /> Subscribe to Newsletter
                </span>
              </div>
              <button className='text-white bg-red-700 block py-4'>Create New Account</button>
          </form>
          <div className='space-x-5 text-center py-5'>
            <span>Terms</span>
            <span>Privacy</span>
            <span>Send Feedback</span>
            <span className='space-x-3'>
              <img className='logo' src='https://th.bing.com/th/id/OIP.y1Di-i7rZBc7fL6m-KcFRgHaHa?pid=ImgDet&rs=1' alt='facebook logo'/>
              <img className='logo' src='https://th.bing.com/th/id/OIP.o06snWh5G4LQ1fJbNlarpAHaGB?pid=ImgDet&rs=1' alt='twitter logo'/>
              <img src='https://th.bing.com/th/id/OIP.3rSTYI2unlM-9raJQJW3lwHaHa?pid=ImgDet&rs=1' alt='youtube logo' className='youtube logo'/>
              <img className='logo' src='https://www.derustit.com/images/social/googleplus.png' alt='google logo'/>
            </span>
        </div>
        </div>
      </main>
  )
}

export default Main
