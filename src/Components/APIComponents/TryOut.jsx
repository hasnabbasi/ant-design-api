import React, { useState } from 'react';
import HeaderTitle from './HeaderTitle';
import {
	EyeTwoTone,
	EyeInvisibleOutlined,
	LockOutlined,
} from '@ant-design/icons';
import { Input, Select } from 'antd';
const TryOut = () => {
	const [radioCheck, setRadioCheck] = useState('OAuth');
	return (
		<div>
			<HeaderTitle title={'Try Out'} api={'AWSS3Control'} />
			<div className='tryout-header'>
				<div className='tryout-left-header'>
					<h2>Security</h2>
					<p>Security Type</p>
					<div className='radio-div'>
						<input
							name='OAuth'
							type='radio'
							className='OAuth radio-btn'
							value={radioCheck}
							checked={radioCheck === 'OAuth'}
							onChange={(e) => {
								setRadioCheck('OAuth');
							}}
						/>
						<label htmlFor='OAuth'>OAuth</label>
						<input
							name='APIKey'
							type='radio'
							className='APIKey radio-btn'
							value={radioCheck}
							checked={radioCheck === 'APIKey'}
							onChange={(e) => {
								setRadioCheck('APIKey');
							}}
						/>
						<label htmlFor='APIKey'>API Key</label>
						<input
							name='Basic'
							type='radio'
							className='Basic radio-btn'
							value={radioCheck}
							checked={radioCheck === 'Basic'}
							onChange={(e) => {
								setRadioCheck('Basic');
							}}
						/>
						<label htmlFor='Basic'>Basic</label>
					</div>
				</div>
				<div className='tryout-right-header'>
					<div>
						<label htmlFor='AccessToken' className='access-tokenlabel'>
							Access Token
						</label>
						<Input.Password
							placeholder='Access Token'
							name='AccessToken'
							iconRender={(visible) =>
								visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
							}
						/>
						<p className='access-tokenhint'>Enter Access Token</p>
					</div>
					<button className='GetKey-btn'>Get Test Key</button>
				</div>
			</div>
			<div>
				<h2>Gateway</h2>
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						alignItems: 'center',
						gap: '1rem',
					}}
				>
					<div className='select-main'>
						<label htmlFor='select-menu' style={{ fontSize: 'large' }}>
							Environment
						</label>
						<Select
							defaultValue='Default'
							id='select-menu-default'
							className='tryout-select'
							style={{
								width: '20rem',
							}}
							options={[
								{
									value: 'Label1',
									label: 'Label1',
								},
								{
									value: 'Label2',
									label: 'Label2',
								},
								{
									value: 'Label3',
									label: 'Label3',
								},
								{
									value: 'Label4',
									label: 'Label4',
								},
							]}
						/>
						<p className='access-tokenhint'>Please Enter an Environment</p>
					</div>
					<p style={{ fontWeight: '500' }}>Postman Collection</p>
					<p style={{ fontWeight: '500' }}>OpenAI</p>
				</div>
			</div>
			<hr />
			<div className='select-main'>
				<label htmlFor='select-menu' style={{ fontSize: 'large' }}>
					Server
				</label>
				<Select
					defaultValue='https'
					id='select-menu-default'
					className='tryout-select'
					style={{
						width: '18rem',
					}}
					options={[
						{
							value: 'Get',
							label: 'Get',
						},
						{
							value: 'Put',
							label: 'Put',
						},
						{
							value: 'Post',
							label: 'Post',
						},
						{
							value: 'Delete',
							label: 'Delete',
						},
						{
							value: 'Patch',
							label: 'Patch',
						},
					]}
				/>
			</div>

			<div className='default-main'>
				<h2>Default</h2>
				<div className='bars get'>
					<span>
						<button>Get</button>/*
					</span>
					<LockOutlined />
				</div>
				<div className='bars put'>
					<span>
						<button>Put</button>/*
					</span>
					<LockOutlined />
				</div>
				<div className='bars post'>
					<span>
						<button>Post</button>/*
					</span>
					<LockOutlined />
				</div>
				<div className='bars delete'>
					<span>
						<button>Delete</button>/*
					</span>
					<LockOutlined />
				</div>
				<div className='bars patch'>
					<span>
						<button>Patch</button>/*
					</span>
					<LockOutlined />
				</div>
			</div>
		</div>
	);
};

export default TryOut;
