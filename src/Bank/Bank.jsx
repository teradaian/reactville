import React from "react"
import './bank.css'

import Account from "./Account"

const Bank = (props) => {

	//fix decimal issue when withdrawing/depositing money
	//limit input to valid numbers

	return (
		<div className="bank">
			<nav>
				<h1>Bank</h1>
			</nav>
			<section>
				<Account name="Checking" handleExchange={props.handleExchange} />
				<Account name="Savings" handleExchange={props.handleExchange} />
			</section>
		</div>
	)
}

export default Bank