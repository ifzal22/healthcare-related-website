import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../Hooks/useAuth';
import './LOging.css';

const LOging = () => {
	const { LogingWidthGoogle, user, handelWithEmailAndPassword, HandelEmailChang, HandelPasswordChang,  } = useAuth();

	console.log(user)
	return (
		<div className='loging'>

			{/* <h1>{user.displayName}</h1> */}


			<div className="container-fluid">
				<div className="row main-content bg-success text-center">
					<div className="col-md-4 text-center company__info">
						<span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
						<h4 className="company_title TITLE">Healthy Life</h4>
					</div>
					<div className="col-md-8 col-xs-12 col-sm-12 login_form ">
						<div className="container-fluid">
							<div className="row">
								<h2>Log In</h2>
							</div>
							<div className="row">
								<form onSubmit={handelWithEmailAndPassword} control="" className="form-group">
									<p className="text-danger">{user.error}</p>



									<div className="row">
										<input onBlur={HandelEmailChang} type="text" name="Email" id="username" className="form__input" placeholder="Email" required />
									</div>



									<div className="row ">

										<input onBlur={HandelPasswordChang} type="password" name="password" id="password" className="form__input" placeholder="Password" required />
									</div>
								{/* 	<button onClick={handelReset}>Reset Password</button> */}



									<div className='Icon'>
										<button type="submit" class="btn btn-danger">
											Submit
										</button>
										<button onClick={LogingWidthGoogle} type="button" class="btn btn-danger"><i class="fab fa-google"></i></button>



									</div>

								</form>


							</div>
							<div className="row">
								<p>Don't have an account? <Link to="/Register" href="#">Register Here</Link></p>

							</div>



						</div>
					</div>
				</div>
			</div>





		</div>
	);
};

export default LOging;