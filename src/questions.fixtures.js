export const questions = {
	"SlideDrugQ1_0": {
		"question": "How would you approach this case?",
		"isFirstQuestion": true,
		"correctAnswer": "left",
		"choices": [{
				"answer": "The pricing of any product, including drugs, can be based on various criteria, such as economic value to the customer. I'd like to know a little more about the customers and the product before determining which pricing mechanism to use.",
				"direction": "left",
				"score": {
					"rigor": 3,
					"structuring": 3,
					"judgment": 3,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_4"
			},
			{
				"answer": "The drug's price needs to cover costs and ensure a profit margin. We should set a price accordingly.",
				"direction": "middle",
				"score": {
					"rigor": 2,
					"structuring": 2,
					"judgment": 2,
					"synthesis": 1
				},
				"links_to": "SlideDrugQ1_5"
			},
			{
				"answer": "The drug's price needs to be competitive. I'd like to know a little more about the market and the competition. Then I'll recommend a price for PrevenT.",
				"direction": "right",
				"score": {
					"rigor": 1,
					"structuring": 1,
					"judgment": 2,
					"synthesis": 1
				},
				"links_to": "SlideDrugQ1_4"
			}
		]
	},
	"SlideDrugQ1_4": {
		"question": "Sure. What exactly would you like to know?",
		"choices": [{
				"answer": "I'd like to understand the demand perspective.",
				"direction": "left",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_6"
			},
			{
				"answer": "I'd like to know whether Clearvenax has a monopoly in the market.",
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": 2,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_14"
			},
			{
				"answer": "I'd like to know if we can charge a price of $4 for PrevenT, the same price that Clearvenax is sold for.",
				"direction": "right",
				"score": {
					"rigor": 0,
					"structuring": 2,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_12"
			}
		]
	},
	"SlideDrugQ1_5": {
		"question": "Okay. So, what do you need to know?",
		"choices": [{
				"answer": "I would like to look at the last comparable drug that PrevenT's maker launched into the market. I am sure we can simply mimic the cost-plus pricing approach that was used then.",
				"direction": "left",
				"score": {
					"rigor": 0,
					"structuring": -5,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_12"
			},
			{
				"answer": "Well, the common thread is that one first calculates the cost of the product, then adds a proportion of it as markup. Basically, this approach sets prices that cover all costs and provide enough profit margin to the firm to earn its target rate of return. So first, I would like to know  the total cost of PrevenT.",
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_13"
			},
			{
				"answer": "In order to ensure profits at the price I suggest for PrevenT, I would like you to provide me with information on the drug's cost structure. And to define the market price, we can add 5%.",
				"direction": "right",
				"score": {
					"rigor": 0,
					"structuring": -5,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_12"
			}
		]
	},
	"SlideDrugQ1_6": {
		"question": "What exactly do you mean by the demand perspective?",
		"choices": [{
				"answer": "I mean that there could be a difference between the end customers (that is, the patients) and the company's targeted buyers for the drug (say, doctors). I think it is important to know if that distinction exists.",
				"direction": "left",
				"score": {
					"rigor": 3,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_22"
			},
			{
				"answer": "I mean that I want to know more about who will buy PrevenT.",
				"direction": "middle",
				"score": {
					"rigor": 1,
					"structuring": 1,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_23"
			},
			{
				"answer": "Is there a market for the drug at all, and what is its size? That's what I'd like to know.",
				"direction": "right",
				"score": {
					"rigor": 1,
					"structuring": 1,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_23"
			}
		]
	},
	"SlideDrugQ1_12": {
		"question": "I think you need more information to draw that conclusion. You might want to find out a little more about the product and the market, and then use a suitable pricing mechanism to suggest a price for PrevenT.",
		"currState": 0,
		"choices": [{
				"answer": "In that case, could you tell me how the dosages of Clearvenax compare with those of PrevenT?",
				"direction": "left",
				"messageDescription": "The patient would be required to take one daily dose of either medicine, for a period of 30 days. You could also look at the following table, which compares the impact of Clearvenax and PrevenT on DVT and other complications of hip endoprosthesis.",
				"score": {
					"rigor": 0,
					"structuring": 2,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_38"
			},
			{
				"answer": "Well, then I'd like to know what advantages PrevenT has over Clearvenax, and vice versa.",
				"direction": "middle",
				"messageDescription": "The client has conducted studies comparing the impact of Clearvenax and PrevenT on DVT and other complications of hip endoprosthesis. Details are available in the following table.",
				"score": {
					"rigor": 0,
					"structuring": 1,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_38"
			},
			{
				"answer": "In that case, I'd like to know more about the demand perspective.",
				"isCorrect": 1,
				"direction": "right",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_6"
			}
		]
	},
	"SlideDrugQ1_13": {
		"question": "My suggestion would be to find out more about the product, market, and customers. I think that will help you determine a more suitable criterion for pricing than costs.",
		"currState": 0,
		"choices": [{
				"answer": "Could you also tell me how the dosages of Clearvenax compare to those of PrevenT?",
				"direction": "left",
				"messageDescription": "The patient would be required to take one daily dose of either medicine, for a period of 30 days. You could also look at the following table, which compares the impact of Clearvenax and PrevenT on DVT and other complications of hip endoprosthesis.",
				"isCorrect": 0,
				"score": {
					"rigor": 0,
					"structuring": -10,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_38"
			},
			{
				"answer": "Well, then I'd like to know what advantages PrevenT has over Clearvenax, and vice versa.",
				"direction": "middle",
				"messageDescription": "The client has conducted studies comparing the impact of Clearvenax and PrevenT on DVT and other complications of hip endoprosthesis. Details are available in the following table.",
				"isCorrect": 0,
				"score": {
					"rigor": 0,
					"structuring": -5,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_38"
			},
			{
				"answer": "In that case, I'd like to know more about the demand perspective.",
				"isCorrect": 1,
				"direction": "right",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_6"
			}
		]
	},
	"SlideDrugQ1_14": {
		"question": "Not really. We can assume that neither Clearvenax nor PrevenT will be able to monopolise the market, and we can assume that the makers of the two drugs will not collude over pricing.",
		"choices": [{
				"answer": "Okay. Then I'd like to know more about the demand perspective.",
				"direction": "left",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_6"
			},
			{
				"answer": "In that case, could you tell me a bit more about the market and to whom PrevenT will be sold?",
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": 1,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_28"
			}
		]
	},
	"SlideDrugQ1_22": {
		"question": "Why do you think it's important to make that distinction?",
		"choices": [{
				"answer": "The difference is important. I need to know which of these two groups we'd sell to, because each group will have different motivations for their purchase decisions.",
				"direction": "left",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 3,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_28"
			},
			{
				"answer": "There is a difference in the market size the client would be addressing. Which of these two groups does the client plan to target?",
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": 1,
					"judgment": 1,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_29"
			},
			{
				"answer": "Well, actually there is not much difference. It all comes down to which pricing mechanism we want to use.",
				"direction": "right",
				"score": {
					"rigor": 0,
					"structuring": -5,
					"judgment": -5,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_29"
			}
		]
	},
	"SlideDrugQ1_23": {
		"question": "The demand for PrevenT comes from patients who need to undergo hip endoprosthesis. The demand also comes from hospitals that perform these surgeries and need to reduce the related complications, such as DVT. Do you think there's a difference between these two groups of customers\u2014patients and hospitals?",
		"choices": [{
				"answer": "Yes. The difference is important. I need to know which of these two groups we'd sell to, because each group will have different motivations for their purchase decisions.",
				"direction": "left",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 3,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_28"
			},
			{
				"answer": "There is a difference in the market size the client would be addressing. Which of these two groups does the client plan to target?",
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": 2,
					"judgment": 1,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_29"
			},
			{
				"answer": "There isn't much difference. It all comes down to which pricing mechanism we want to use.",
				"direction": "right",
				"score": {
					"rigor": 0,
					"structuring": -5,
					"judgment": -5,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_29"
			}
		]
	},
	"SlideDrugQ1_28": {
		"question": "Sure. PrevenT will be sold to hospitals. Hospitals get a fixed price for hip endoprosthesis, and are not reimbursed by patients insurance companies for any complications that arise during surgery. Therefore, they would be interested in reducing complications, and PrevenT helps do exactly that. Is there any further information you would like?",
		"currState": 0,
		"messageHeading": "",
		"choices": [{
				"answer": "Is PrevenT better than Clearvenax at reducing the complication rates for DVT?",
				"direction": "left",
				"messageDescription": "The client has conducted studies comparing the impact of Clearvenax and PrevenT on DVT and other complications of hip endoprosthesis. Details are available in the following table.",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 3,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_38"
			},
			{
				"answer": "Does using PrevenT have any downsides?",
				"messageDescription": "The client has conducted studies comparing the impact of Clearvenax and PrevenT on DVT and other complications of hip endoprosthesis. Details are available in the following table.",
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": 2,
					"judgment": 2,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_38"
			},
			{
				"answer": "How do the dosages of Clearvenax and PrevenT compare?",
				"direction": "right",
				"messageDescription": "The patient would be required to take one daily dose of either medicine, for a period of 30 days. You could also look at the following table, which compares the impact of Clearvenax and PrevenT on DVT and other complications of hip endoprosthesis.",
				"score": {
					"rigor": 0,
					"structuring": 1,
					"judgment": 1,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_38"
			}
		]
	},
	"SlideDrugQ1_29": {
		"question": "Well, the distinction between these two groups is important, because each group would have different motivations for their purchase decisions. Our client plans to sell PrevenT to hospitals. Hospitals get a fixed price for hip endoprosthesis and are not reimbursed by patients' insurance companies for any complications that arise during surgery. Therefore, they would be interested in reducing complications, and PrevenT helps do exactly that.",
		"currState": 0,
		"choices": [{
				"answer": "Is PrevenT better than Clearvenax at reducing the complication rates for DVT?",
				"messageDescription": "The client has conducted studies comparing the impact of Clearvenax and PrevenT on DVT and other complications of hip endoprosthesis. Details are available in the following table.",
				"direction": "left",
				"score": {
					"rigor": 3,
					"structuring": 0,
					"judgment": 3,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_38"
			},
			{
				"answer": "Does using PrevenT have any downsides?",
				"messageDescription": "The client has conducted studies comparing the impact of Clearvenax and PrevenT on DVT and other complications of hip endoprosthesis. Details are available in the following table.",
				"direction": "middle",
				"score": {
					"rigor": 2,
					"structuring": 0,
					"judgment": 2,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_38"
			},
			{
				"answer": "How do the dosages of Clearvenax and PrevenT compare?",
				"messageDescription": "The patient would be required to take one daily dose of either medicine, for a period of 30 days. You could also look at the following table, which compares the impact of Clearvenax and PrevenT on DVT and other complications of hip endoprosthesis.",
				"direction": "right",
				"score": {
					"rigor": 1,
					"structuring": 0,
					"judgment": 1,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_38"
			}
		]
	},
	"SlideDrugQ1_30": {
		"table": "table-d",
		"links_to": "SlideDrugQ1_38"
	},
	"SlideDrugQ1_31": {
		"table": "table-d",
		"links_to": "SlideDrugQ1_38"
	},
	"SlideDrugQ1_38": {
		"question": "What would you like to do next?",
		"choices": [{
				"answer": "I have a lot of information about how PrevenT compares with Clearvenax, and about the market. Since PrevenT will be sold mainly to hospitals, I would like to know how hospitals make their decisions on buying drugs.",
				"direction": "left",
				"score": {
					"rigor": 3,
					"structuring": 0,
					"judgment": 3,
					"synthesis": 3
				},
				"links_to": "SlideDrugQ1_67"
			},
			{
				"answer": "I have a lot of information now on the product and its buyers. But I'd like some information on costs.",
				"direction": "middle",
				"score": {
					"rigor": 2,
					"structuring": 0,
					"judgment": 2,
					"synthesis": 2
				},
				"links_to": "SlideDrugQ1_43"
			},
			{
				"answer": "I have information on the product and the competition. I think we should set a price for PrevenT similar to what the competition has set for its product.",
				"direction": "right",
				"score": {
					"rigor": 1,
					"structuring": 0,
					"judgment": 1,
					"synthesis": 1
				},
				"links_to": "SlideDrugQ1_44"
			}
		]
	},
	"SlideDrugQ1_43": {
		"question": "Okay. Which aspects of costs would you consider in pricing PrevenT?",
		"choices": [{
				"answer": "I'd like to know about the costs incurred by hospitals in treating the complications related to hip endoprosthesis.",
				"direction": "left",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_66"
			},
			{
				"answer": "I'd like to know more about the costs incurred by patients through hip-replacement surgery and related expenses.",
				"direction": "right",
				"score": {
					"rigor": 0,
					"structuring": 1,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_53"
			}
		]
	},
	"SlideDrugQ1_44": {
		"question": "Okay. Given that the closest competitor, Clearvenax, is priced at $4 per dose, how would you price PrevenT?",
		"choices": [{
				"answer": "A little less than $4 the client should undercut the competition.",
				"direction": "left",
				"score": {
					"rigor": -5,
					"structuring": -5,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_54"
			},
			{
				"answer": "At $4 it seems reasonable, if Clearvenax is selling at that price, too.",
				"direction": "middle",
				"score": {
					"rigor": 1,
					"structuring": 1,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_54"
			},
			{
				"answer": "A little over $4 PrevenT offers better value than Clearvenax, because it results in a lower complication rate for DVT.",
				"direction": "right",
				"score": {
					"rigor": 3,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_55"
			}
		]
	},
	"SlideDrugQ1_53": {
		"question": "This doesn't have a direct bearing on the proposed price of PrevenT. Patients' costs are paid by their health insurance companies, which pay a fixed sum to the hospital for hip endoprosthesis. Given this information, what would you base your pricing decision on, and why?",
		"choices": [{
				"answer": "I'd like to consider the costs incurred by hospitals in treating the complications related to hip endoprosthesis. That would determine how much hospitals would pay for PrevenT.",
				"direction": "left",
				"score": {
					"rigor": 3,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_66"
			},
			{
				"answer": "I'd like to consider the value that hospitals derive from using PrevenT rather than Clearvenax. That would determine how much hospitals would pay for PrevenT.",
				"direction": "middle",
				"score": {
					"rigor": 1,
					"structuring": 1,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_67"
			},
			{
				"answer": "The competition's pricing criteria. That would determine the criteria that should be used to set the price of PrevenT.",
				"direction": "right",
				"score": {
					"rigor": -10,
					"structuring": -10,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_69"
			}
		]
	},
	"SlideDrugQ1_54": {
		"question": "This may not be the best price to set. Apart from considering what the competition does, you also need to take other factors into account. For instance, the price needs to reflect not just what the seller is willing to sell for, but also how much the potential buyers\u2014in this case, hospitals\u2014are willing to pay for the product. What do you think would determine hospitals' willingness to pay for PrevenT?",
		"choices": [{
				"answer": "Because the complication rate for DVT is lower with PrevenT than with Clearvenax, hospitals would derive more value from PrevenT. Thus, they would be willing to pay more for it than for Clearvenax. PrevenT can be safely priced higher than Clearvenax.",
				"direction": "left",
				"score": {
					"rigor": 0,
					"structuring": 2,
					"judgment": 0,
					"synthesis": 1
				},
				"links_to": "SlideDrugQ1_67"
			},
			{
				"answer": "Their willingness to pay for PrevenT would depend on how much they have to pay for Clearvenax. They may not be willing to pay more for PrevenT, if they're getting Clearvenax at a good price.",
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": 1,
					"judgment": 0,
					"synthesis": 1
				},
				"links_to": "SlideDrugQ1_68"
			}
		]
	},
	"SlideDrugQ1_55": {
		"question": "As you can see, hospitals would derive some additional benefit from using PrevenT rather than Clearvenax. This is the 'economic value', of the product to the buyer. What does this imply for the pricing of PrevenT?",
		"choices": [{
				"answer": "Pricing PrevenT below Clearvenax would offer hospitals dual benefits\u2014the price of the drug is lower, and the complication rates for DVT are lower than with Clearvenax.",
				"direction": "left",
				"score": {
					"rigor": 0,
					"structuring": 1,
					"judgment": 0,
					"synthesis": 1
				},
				"links_to": "SlideDrugQ1_68"
			},
			{
				"answer": "Because the complication rate for DVT is lower with PrevenT than with Clearvenax, hospitals would derive more value from PrevenT. Thus, they would be willing to pay more for it than for Clearvenax. PrevenT can be safely priced higher than Clearvenax.",
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 3
				},
				"links_to": "SlideDrugQ1_67"
			}
		]
	},
	"SlideDrugQ1_66": {
		"question": "That's a good point. While hospitals get a fixed sum for hip endoprosthesis from insurance companies, they are not reimbursed for any complications, such as DVT, that arise during surgery. Therefore, it is in the hospitals' interests to reduce the complication rate, and thereby reduce nonreimbursable costs. What does this imply for the pricing of PrevenT?",
		"choices": [{
				"answer": "Pricing PrevenT below Clearvenax would offer hospitals dual benefits the price of the drug is lower, and the complication rates for DVT are lower than with Clearvenax.",
				"direction": "left",
				"score": {
					"rigor": 0,
					"structuring": 1,
					"judgment": 0,
					"synthesis": 1
				},
				"links_to": "SlideDrugQ1_68"
			},
			{
				"answer": "Because the complication rate for DVT is lower with PrevenT than with Clearvenax, hospitals would derive more value from PrevenT. Thus, they would be willing to pay more for it than for Clearvenax. PrevenT can be safely priced higher than Clearvenax.",
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 3
				},
				"links_to": "SlideDrugQ1_67"
			}
		]
	},
	"SlideDrugQ1_67": {
		"question": "Well, hospitals are very focused on maximizing their profits. That means they make their buying decisions based on the drugs' economic value to them. What other information would you need to execute this value-based pricing for PrevenT?",
		"currState": 0,
		"choices": [{
				"answer": "I'd need to calculate the cost savings per patient from reducing complications related to hip surgery, and then determine the economic value of one dose of PrevenT compared with the economic value of one dose of Clearvenax.",
				"direction": "left",
				"messageDescription": "Okay. Let's take another look at the available data for both drugs in the following table, and then calculate the cost savings and economic value.",
				"score": {
					"rigor": 3,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_82"
			},
			{
				"answer": "I'd need to know the revenue earned per patient, and then compare it with the cost caused by the complications related to hip surgery.",
				"messageDescription": "That is not as relevant as the cost savings from reducing complications per patient. If you take the cost savings that come from using Clearvenax and PrevenT, you can calculate the economic value of PrevenT per patient per dose. Let's go ahead and look at this data in the following table.",
				"direction": "middle",
				"score": {
					"rigor": 1,
					"structuring": 1,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_82"
			},
			{
				"answer": "I'd need to know the production costs for PrevenT. This will help me to recommend the best price for the new drug.",
				"direction": "right",
				"messageDescription": "That is not as relevant as the cost savings from reducing complications per patient. If you take the cost savings that come from using Clearvenax and PrevenT, you can calculate the economic value of PrevenT per patient per dose. Let's go ahead and look at this data in the following table.",
				"score": {
					"rigor": -5,
					"structuring": -5,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_82"
			}
		]
	},
	"SlideDrugQ1_68": {
		"question": "That's not completely right. Hospitals may be willing to pay more for PrevenT because they derive more value from it. Basing the price on the value or economic value of a product is known as 'value-based pricing'. PrevenT price should therefore be based on hospitals' willingness to pay (WTP) for the drug. What data do you need to calculate WTP?",
		"choices": [{
				"answer": "I'd need to calculate the cost savings per patient from reducing complications related to hip surgery, and then determine the economic value of one dose of PrevenT compared with the economic value of one dose of Clearvenax.",
				"direction": "left",
				"messageDescription": "Okay. Let's take another look at the available data for both drugs in the following table, and then calculate the cost savings and economic value.",
				"score": {
					"rigor": 3,
					"structuring": 3,
					"judgment": 1,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_82"
			},
			{
				"answer": "I'd need to know the revenue earned per patient, and then compare it with the cost caused by the complications related to hip surgery.",
				"direction": "middle",
				"messageDescription": "That is not as relevant as the cost savings from reducing complications per patient. If you take the cost savings that come from using Clearvenax and PrevenT, you can calculate the economic value of PrevenT per patient per dose. Let's go ahead and look at this data in the following table.",
				"score": {
					"rigor": 1,
					"structuring": 1,
					"judgment": 1,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_82"
			},
			{
				"answer": "I'd need to know the production costs for PrevenT. This will help me to recommend the best price for the new drug.",
				"direction": "right",
				"messageDescription": "That is not as relevant as the cost savings from reducing complications per patient. If you take the cost savings that come from using Clearvenax and PrevenT, you can calculate the economic value of PrevenT per patient per dose. Let's go ahead and look at this data in the following table.",
				"score": {
					"rigor": -15,
					"structuring": -15,
					"judgment": -15,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_82"
			}
		]
	},
	"SlideDrugQ1_69": {
		"question": "That's not completely right. The more important economic criterion is the value that hospitals derive from using PrevenT, as opposed to using Clearvenax. Because PrevenT reduces complication rates for DVT more than Clearvenax, hospitals would derive higher value from using PrevenT. Therefore, they would be willing to pay more for it.PrevenT's price should therefore be based on hospitals' willingness to pay (WTP) for the drug. What data do you need to calculate WTP?",
		"currState": 0,
		"choices": [{
				"answer": "I'd need to calculate the cost savings per patient from reducing complications related to hip surgery, and then determine the economic value of one dose of PrevenT compared with the economic value of one dose of Clearvenax.",
				"messageDescription": "Okay. Let's take another look at the available data for both drugs in the following table, and then calculate the cost savings and economic value.",
				"direction": "left",
				"score": {
					"rigor": 3,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_82"
			},
			{
				"answer": "I'd need to know the revenue earned per patient, and then compare it with the cost caused by the complications related to hip surgery.",
				"direction": "middle",
				"messageDescription": "That is not as relevant as the cost savings from reducing complications per patient. If you take the cost savings that come from using Clearvenax and PrevenT, you can calculate the economic value of PrevenT per patient per dose. Let's go ahead and look at this data in the following table.",
				"score": {
					"rigor": 1,
					"structuring": 1,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_82"
			},
			{
				"answer": "I'd need to know the production costs for PrevenT. This will help me to recommend the best price for the new drug.",
				"direction": "right",
				"messageDescription": "That is not as relevant as the cost savings from reducing complications per patient. If you take the cost savings that come from using Clearvenax and PrevenT, you can calculate the economic value of PrevenT per patient per dose. Let's go ahead and look at this data in the following table.",
				"score": {
					"rigor": -10,
					"structuring": -10,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_82"
			}
		]
	},
	"SlideDrugQ1_75": {
		"table": "table-r",
		"links_to": "SlideDrugQ1_82"
	},

	"SlideDrugQ1_76": {
		"table": "table-r",
		"links_to": "SlideDrugQ1_82"
	},

	"SlideDrugQ1_75b": {
		"table": "table-o",
		"links_to": "SlideDrugQ1_82"
	},

	"SlideDrugQ1_82": {
		"question": "You have calculated the additional amount per dose, which is $2, that hospitals would be willing to pay for PrevenT. What price would you suggest for PrevenT now?",
		"choices": [{
				"answer": "Hospitals are already paying $4 for Clearvenax. Since they're willing to pay an additional $2 for PrevenT, I believe the price should be around $6.",
				"direction": "left",
				"score": {
					"rigor": 3,
					"structuring": 0,
					"judgment": 3,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_86"
			},
			{
				"answer": "I'd suggest a price of $4, the same as Clearvenax. Clearvenax is an established drug, so the new drug, PrevenT, needs to be very competitive.",
				"direction": "middle",
				"score": {
					"rigor": 1,
					"structuring": 0,
					"judgment": 1,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_87"
			},
			{
				"answer": "Since hospitals are willing to pay $2 for a dose of PrevenT, I'd suggest a price of $2.",
				"direction": "right",
				"score": {
					"rigor": -5,
					"structuring": 0,
					"judgment": -5,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_87"
			}
		]
	},
	"SlideDrugQ1_86": {
		"question": "That seems like a valid suggestion. If the product is priced at $6, do you think it would be profitable for the client?",
		"choices": [{
				"answer": "To determine that, I'd need to know the production cost per dose of PrevenT at this price.",
				"direction": "left",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 3,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_100"
			},
			{
				"answer": "Yes, we have executed value-based pricing accurately. So the product should be profitable at this price.",
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": -5,
					"judgment": 1,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_91"
			},
			{
				"answer": "No, I think the price should be higher than $6 for the product to be profitable.",
				"direction": "right",
				"score": {
					"rigor": 0,
					"structuring": -10,
					"judgment": -5,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_91"
			}
		]
	},
	"SlideDrugQ1_87": {
		"question": "That may not necessarily be true. Considering the economic value of PrevenT for hospitals, a price around $6 might be more appropriate. Do you think the product would be profitable for the client at a price of $6?",
		"currState": 0,
		"messageHeading": "",
		"messageDescription": "All right. The production cost per dose of PrevenT is $2. Let's calculate the unit contribution margin in the following exercise.",
		"choices": [{
				"answer": "To determine that, I'd need to know the production cost per dose of PrevenT at this price.",
				"direction": "left",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 3,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_100"
			},
			{
				"answer": "Yes, we have executed value-based pricing accurately. So the product should be profitable at this price.",
				"isCorrect": 1,
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": -5,
					"judgment": 1,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_91"
			},
			{
				"answer": "No, I think the price should be higher than $6 for the product to be profitable.",
				"isCorrect": 1,
				"direction": "right",
				"score": {
					"rigor": 0,
					"structuring": -10,
					"judgment": -5,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_91"
			}
		]
	},
	"SlideDrugQ1_91": {
		"question": "Well, it's difficult to say that with certainty, unless you calculate the contribution margin per dose for PrevenT at this price. What additional information would you need for this?",
		"currState": 0,
		"choices": [{
				"answer": "I need to know the production cost per dose of PrevenT.",
				"direction": "left",
				"messageDescription": "All right. The production cost per dose of PrevenT is $2. Let's calculate the unit contribution margin in the following exercise.",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_100"
			},
			{
				"answer": "I need to know the number of patients who would use PrevenT.",
				"direction": "middle",
				"messageDescription": "It would be more helpful to know the production cost per dose, which is $2 for PrevenT. Let's calculate the unit contribution margin in the following exercise.",
				"score": {
					"rigor": 0,
					"structuring": 1,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_100"
			},
			{
				"answer": "I need to know the annual dosage for PrevenT.",
				"direction": "right",
				"messageDescription": "It would be more helpful to know the production cost per dose, which is $2 for PrevenT. Let's calculate the unit contribution margin in the following exercise.",
				"score": {
					"rigor": 0,
					"structuring": 1,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_100"
			}
		]
	},
	"SlideDrugQ1_95": {
		"table": "table-s",
		"links_to": "SlideDrugQ1_100"
	},

	"SlideDrugQ1_96": {
		"table": "table-s",
		"links_to": "SlideDrugQ1_100"
	},

	"SlideDrugQ1_100": {
		"question": "Now that you know the unit contribution margin, which is $4, what is the annual contribution margin that can be expected at this price?",
		"currState": 0,
		"choices": [{
				"answer": "To calculate the annual contribution margin, I need to know the number of doses of PrevenT required annually per patient and the number of patients per year.",
				"direction": "left",
				"messageDescription": "That's right. Let's go on to calculating the manufacturer's contribution margin in the following exercise.",
				"score": {
					"rigor": 3,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_109"
			},
			{
				"answer": "To calculate that, I'd like to know the annual production costs of PrevenT and the number of patients per year.",
				"direction": "middle",
				"messageDescription": "Actually, you need to know the number of doses required annually and the number of patients per year. Let's go ahead and calculate the manufacturer's contribution margin per year in the following exercise.",
				"score": {
					"rigor": 1,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_109"
			}
		]
	},
	"SlideDrugQ1_104": {
		"table": "table-a",
		"links_to": "SlideDrugQ1_109"
	},

	"SlideDrugQ1_105": {
		"table": "table-a",
		"links_to": "SlideDrugQ1_109"
	},

	"SlideDrugQ1_109": {
		"question": "Look at the information below carefully. What are the implications of these new findings?",
		"bottomFootnote": "*Patients with previous thrombosis, ischaemic stroke, acute coronary syndrome.",
		"choices": [{
				"answer": "This means that PrevenT can be sold to two segments\u2014high-risk patients and normal-risk patients.",
				"direction": "left",
				"score": {
					"rigor": 3,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_117"
			},
			{
				"answer": "PrevenT is more effective for high-risk patients. This information is relevant and should be considered.",
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": 0,
					"judgment": 2,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_117"
			},
			{
				"answer": "It implies that PrevenT should be used only for high-risk patients.",
				"direction": "right",
				"score": {
					"rigor": 1,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_117"
			}
		],
		"tableData": {
			"tables": [{
					"title": "Normal & High Risk Patients Comparison",
					"rows": [{
						"columns": [{
								"label": "Normal risk patients 800,000"
							},
							{
								"label": "Subgroup"
							},
							{
								"label": "High risk patients* 200,000"
							}
						]
					}]
				},
				{
					"rows": [{
							"columns": [{
									"label": "Complication rate Normal patients"
								},
								{
									"label": "Clearvenax"
								},
								{
									"label": "PrevenT"
								}
							]
						},
						{
							"columns": [{
									"label": "Thrombosis (DVT)"
								},
								{
									"label": "20%"
								},
								{
									"label": "10%"
								}
							]
						},
						{
							"columns": [{
									"label": "Embolism (PE)"
								},
								{
									"label": "1%"
								},
								{
									"label": "3%"
								}
							]
						},
						{
							"columns": [{
									"label": "Major Bleeding"
								},
								{
									"label": "1%"
								},
								{
									"label": "5%"
								}
							]
						}
					]
				},
				{
					"rows": [{
							"columns": [{
									"label": "Complication rate High Risk patients"
								},
								{
									"label": "Clearvenax"
								},
								{
									"label": "PrevenT"
								}
							]
						},
						{
							"columns": [{
									"label": "Thrombosis (DVT)"
								},
								{
									"label": "25%"
								},
								{
									"label": "5%"
								}
							]
						},
						{
							"columns": [{
									"label": "Embolism (PE)"
								},
								{
									"label": "2%"
								},
								{
									"label": "2%"
								}
							]
						},
						{
							"columns": [{
									"label": "Major Bleeding"
								},
								{
									"label": "1%"
								},
								{
									"label": "3%"
								}
							]
						}
					]
				}
			]
		}
	},
	"SlideDrugQ1_117": {
		"question": "The new findings do imply that there are actually two markets for PrevenT\u2014one comprising high-risk patients, and the other made up of normal-risk patients. What should the client do?",
		"choices": [{
				"answer": "The client should look at economic value for customers\u2014that is, hospitals\u2014in both markets before making a decision.",
				"direction": "left",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 3
				},
				"links_to": "SlideDrugQ1_121"
			},
			{
				"answer": "The client should consider the production cost and expected margins before deciding whether to sell PrevenT in one or both markets.",
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": 1,
					"judgment": 0,
					"synthesis": 1
				},
				"links_to": "SlideDrugQ1_122"
			},
			{
				"answer": "The client should sell it at the previously determined price. I think it should work for them.",
				"direction": "right",
				"score": {
					"rigor": 0,
					"structuring": -5,
					"judgment": 0,
					"synthesis": -5
				},
				"links_to": "SlideDrugQ1_122"
			}
		]
	},
	"SlideDrugQ1_121": {
		"question": "Well, economic value of PrevenT is an important parameter to consider. How do you think economic value would be affected by the existence of two different markets?",
		"currState": 0,
		"messageHeading": "",
		"messageDescription": "The client has conducted studies comparing the impact of Clearvenax and PrevenT on DVT and other complications of hip endoprosthesis. Details are available in the following table.",
		"choices": [{
				"answer": "The economic value of PrevenT would be higher for hospitals in the case of high-risk patients. Therefore, the client can charge a higher price for PrevenT.",
				"direction": "left",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 3,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_126"
			},
			{
				"answer": "Well, actually, I don't think there would be much impact on economic value. Hospitals will have to pay more for PrevenT than for Clearvenax, anyway, so the new findings may not change anything.",
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": -5,
					"judgment": -5,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_127"
			},
			{
				"answer": "The client needs to check whether the increased rates of other complications with PrevenT could offset the reduced complication rates of DVT. In that case, the economic value of PrevenT for the customers would not change much.",
				"direction": "right",
				"score": {
					"rigor": 0,
					"structuring": 1,
					"judgment": -5,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_127"
			}
		]
	},
	"SlideDrugQ1_122": {
		"question": "I think you need to look at the economic value of PrevenT in both markets. How do you think economic value would be affected by the existence of two different markets?",
		"choices": [{
				"answer": "The economic value of PrevenT would be higher for hospitals in the case of high-risk patients. Therefore, the client can charge a higher price for PrevenT.",
				"direction": "left",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 3,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_126"
			},
			{
				"answer": "I don't think there would be much impact on economic value. Hospitals will have to pay more for PrevenT than for Clearvenax, anyway, so the new findings may not change anything.",
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": -5,
					"judgment": -5,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_127"
			},
			{
				"answer": "The client needs to check whether the increased rates of other complications with PrevenT could offset the reduced complication rates of DVT. In that case, the economic value of PrevenT for the customers would not change much.",
				"direction": "right",
				"score": {
					"rigor": 0,
					"structuring": 1,
					"judgment": 1,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_127"
			}
		]
	},
	"SlideDrugQ1_126": {
		"question": "You may be right. Further exploration is certainly warranted to see how the price of PrevenT would be impacted by this development.",
		"currState": 0,
		"choices": [{
				"answer": "I'd consider the high-risk patients a new group of patients and calculate WTP and the annual contribution margin for this group separately. Do we have data to do that?",
				"direction": "left",
				"messageDescription": "We do in fact have data for that. You need to calculate the WTP and price of PrevenT for the new group of high-risk patients.Let's move on to that in the following exercise.",
				"score": {
					"rigor": 3,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_136"
			},
			{
				"answer": "I'd suggest we continue with a price of $6 for both patient groups. The client will earn decent enough profits with that.",
				"direction": "middle",
				"messageDescription": "There's probably a better approach to follow. It might help to calculate the WTP and price of PrevenT for the group of high-risk patients. Let's move on to that in the following exercise.",
				"score": {
					"rigor": -5,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_136"
			},
			{
				"answer": "I'd like to know how the price of Clearvenax is changing in response to these new findings. I'd like to set a price for PrevenT based on that.",
				"direction": "right",
				"messageDescription": "There's probably a better approach to follow. It might help to calculate the WTP and price of PrevenT for the group of high-risk patients.Let's move on to that in the following exercise.",
				"score": {
					"rigor": -5,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_136"
			}
		]
	},
	"SlideDrugQ1_127": {
		"question": "You can't really say that there would be no impact. Considering that the complication rates for DVT among high-risk patients are significantly lower if PrevenT is used, hospitals would save a lot more in costs by using this drug versus Clearvenax. Therefore, the economic value of using the drug would be higher, which would have an impact on PrevenT's pricing. How would you go about pricing PrevenT now?",
		"currState": 0,
		"choices": [{
				"answer": "I'd consider the high-risk patients a new group of patients and calculate WTP and the annual contribution margin for this group separately. Do we have data to do that?",
				"direction": "left",
				"messageDescription": "We do in fact have data for that. You need to calculate the WTP and price of PrevenT for the new group of high-risk patients. Let's move on to that in the following exercise.",
				"score": {
					"rigor": 3,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_136"
			},
			{
				"answer": "I'd suggest we continue with a price of $6 for both patient groups. The client will earn decent enough profits with that.",
				"direction": "middle",
				"messageDescription": "There's probably a better approach to follow. It might help to calculate the WTP and price of PrevenT for the group of high-risk patients. Let's move on to that in the following exercise.",
				"score": {
					"rigor": -5,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_136"
			},
			{
				"answer": "I'd like to know how the price of Clearvenax is changing in response to these new findings. I'd like to set a price for PrevenT based on that.",
				"direction": "right",
				"messageDescription": "There's probably a better approach to follow. It might help to calculate the WTP and price of PrevenT for the group of high-risk patients. Let's move on to that in the following exercise.",
				"score": {
					"rigor": -5,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_136"
			}
		]
	},
	"SlideDrugQ1_131": {
		"table": "table_l",
		"links_to": "SlideDrugQ1_136"
	},
	"SlideDrugQ1_132": {
		"table": "table_l",
		"links_to": "SlideDrugQ1_136"
	},
	"SlideDrugQ1_136": {
		"question": "We now know that hospitals would be willing to pay up to $14 to use PrevenT for high-risk patients, and $6 for normal-risk patients. Let's assume hospitals don't have any loyalty and would change drugs for any amount of savings, no matter how small. To keep PrevenT from capturing 100% of the market, Clearvenax\u2019s maker would lower its drug price. In this case, what should be our client\u2019s competitive response to drive Clearvenax out of the market?",
		"choices": [{
				"answer": "PrevenT would have to reduce its drug price by the amount of the original contribution margin of Clearvenax, which is $3.",
				"direction": "left",
				"score": {
					"rigor": 3,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_141"
			},
			{
				"answer": "PrevenT would have to reduce its drug price by the amount of its production cost, which is $2.",
				"direction": "middle",
				"score": {
					"rigor": 1,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_140"
			},
			{
				"answer": "PrevenT would have to reduce its drug price by the amount of the production cost of Clearvenax, which is $1.",
				"direction": "right",
				"score": {
					"rigor": 1,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_140"
			}
		]
	},
	"SlideDrugQ1_140": {
		"question": "Well, if PrevenT would like to drive Clearvenax out of the market, PrevenT would have to force Clearvenax to sell at its production cost, which is $1. This means that PrevenT would have to reduce its price by $3, since $4 is the current price of Clearvenax. What would this imply for the price of PrevenT for normal-risk and high-risk patients?",
		"choices": [{
				"answer": "If PrevenT were marketed for normal-risk patients, the price would be $3. Otherwise, for high-risk patients, the price would be $11.",
				"direction": "left",
				"score": {
					"rigor": 3,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_145"
			},
			{
				"answer": "If PrevenT were marketed for normal-risk patients, the price would be $2. Otherwise, for high-risk patients, the price would be $11.",
				"direction": "middle",
				"score": {
					"rigor": -5,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_146"
			},
			{
				"answer": "PrevenT should be marketed for the two groups at different prices.",
				"direction": "right",
				"score": {
					"rigor": -10,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_154"
			}
		]
	},
	"SlideDrugQ1_141": {
		"question": "Correct. If PrevenT reduces its price by $3, Clearvenax would have to sell its drug at $1, which would not be affordable because its production cost is also $1. What would this imply for the price of PrevenT for normal-risk and for high-risk patients?",
		"choices": [{
				"answer": "If PrevenT were marketed for normal-risk patients, the price would be $3. Otherwise, for high-risk patients, the price would be $11.",
				"direction": "left",
				"score": {
					"rigor": 3,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_145"
			},
			{
				"answer": "If PrevenT were marketed for normal-risk patients, the price would be $2. Otherwise, for high-risk patients, the price would be $11.",
				"direction": "middle",
				"score": {
					"rigor": -5,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_146"
			},
			{
				"answer": "PrevenT should be marketed for the two groups at different prices.",
				"direction": "right",
				"score": {
					"rigor": -10,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_154"
			}
		]
	},
	"SlideDrugQ1_145": {
		"question": "Well, PrevenT decided to drive Clearvenax out of the market and would have to choose between marketing the drug for normal-risk patients at $3 or for high-risk patients at $11. What would you recommend?",
		"currState": 0,
		"choices": [{
				"answer": "I would like to first calculate the annual contribution margins for both potential markets. ",
				"messageDescription": "This table provides the necessary data to calculate the manufacturer's contribution margins for normal-risk and high-risk patients.",
				"direction": "left",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_154"
			},
			{
				"answer": "PrevenT should be marketed only for high-risk patients, as the potential profit is higher.",
				"messageDescription": "Let's calculate the annual contribution margin for each group before giving a recommendation. The following table provides the necessary data.",
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": 1,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_154"
			}
		]
	},
	"SlideDrugQ1_146": {
		"question": "Well, this is not completely correct. Since the WTP for normal-risk patients was $6, the competitive price of PrevenT to drive out Clearvenax would be $3. Now, PrevenT's maker would have to choose between marketing the drug for normal-risk patients at $3 or for high-risk patients at $11. What would you recommend?",
		"choices": [{
				"answer": "I would like to first calculate the annual contribution margins for both potential markets. ",
				"direction": "left",
				"messageDescription": "This table provides the necessary data to calculate the manufacturer's contribution margins for normal-risk and high-risk patients.",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_154"
			},
			{
				"answer": "PrevenT should be marketed only for high-risk patients, as the potential profit is higher.",
				"direction": "middle",
				"messageDescription": "Let's calculate the annual contribution margin for each group before giving a recommendation. The following table provides the necessary data.",
				"score": {
					"rigor": 0,
					"structuring": 1,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_154"
			}
		]
	},
	"SlideDrugQ1_149": {
		"table": "table-c",
		"links_to": "SlideDrugQ1_154"
	},
	"SlideDrugQ1_150": {
		"table": "table-c",
		"links_to": "SlideDrugQ1_154"
	},
	"SlideDrugQ1_154": {
		"question": "Look at the information below carefully. Now that you have the price and contribution margins for both groups of patients (normal-risk and high-risk)  what approach would you recommend to market PrevenT?",
		"bottomFootnote": "Note: Figures in brackets indicate negative values.",
		"tableData": {
			"tables": [{
				"title": "Contribution Margin Comparison",
				"rows": [{
						"columns": [{
								"label": "Type of Patients"
							},
							{
								"label": "Normal Risk Patients"
							},
							{
								"label": "High Risk Patients"
							}
						]
					},
					{
						"columns": [{
								"label": "Final competitive price per dose"
							},
							{
								"label": "$3.00"
							},
							{
								"label": "$11.00"
							}
						]
					},
					{
						"columns": [{
								"label": "Production cost PrevenT per dose"
							},
							{
								"label": "($2.00)"
							},
							{
								"label": "($2.00)"
							}
						]
					},
					{
						"columns": [{
								"label": "Manufacturer contribution margin per dose"
							},
							{
								"label": "$1.00"
							},
							{
								"label": "$9.00"
							}
						]
					},
					{
						"columns": [{
								"label": "Required doses per patient"
							},
							{
								"label": "30"
							},
							{
								"label": "30"
							}
						]
					},
					{
						"columns": [{
								"label": "Number of patients/year"
							},
							{
								"label": "800,000"
							},
							{
								"label": "200,000"
							}
						]
					},
					{
						"columns": [{
								"label": "Manufacturer contribution per year"
							},
							{
								"label": "=$ 24 M"
							},
							{
								"label": "=$ 54 M"
							}
						]
					}
				]
			}]
		},
		"choices": [{
				"answer": "PrevenT should be marketed only for high-risk patients.",
				"direction": "left",
				"score": {
					"rigor": 3,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_158"
			},
			{
				"answer": "PrevenT should be marketed only for normal-risk patients.",
				"direction": "middle",
				"score": {
					"rigor": -5,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_159"
			},
			{
				"answer": "PrevenT should be marketed for both groups, high-risk and normal-risk patients.",
				"direction": "right",
				"score": {
					"rigor": -5,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 0
				},
				"links_to": "SlideDrugQ1_160"
			}
		]
	},
	"SlideDrugQ1_158": {
		"question": "I'd like to know a little more about the reasons behind your recommendation. Why would you market the drug for high-risk patients only?",
		"choices": [{
				"answer": "The total profit is higher when the drug is marketed only for high-risk patients.",
				"direction": "left",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 3
				},
				"links_to": "SlideDrugQ1_170"
			},
			{
				"answer": "High-risk patients benefit the most from using PrevenT, because PrevenT reduces the complication rates for DVT more significantly among those patients than among normal-risk patients.",
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": 2,
					"judgment": 0,
					"synthesis": 1
				},
				"links_to": "SlideDrugQ1_170"
			},
			{
				"answer": "Marketing the drug only for high-risk patients means that the client could earn a higher contribution margin per dose.",
				"direction": "right",
				"score": {
					"rigor": 0,
					"structuring": 1,
					"judgment": 0,
					"synthesis": 1
				},
				"links_to": "SlideDrugQ1_170"
			}
		]
	},
	"SlideDrugQ1_159": {
		"question": "I'd like to know a little more about the reasons behind your recommendation. Why would you market the drug for normal-risk patients only?",
		"choices": [{
				"answer": "Although the drug would be sold at a lower price, the client could capture more market share by marketing it only for normal-risk patients, because volumes and revenues would be higher.",
				"direction": "left",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 3
				},
				"links_to": "SlideDrugQ1_171"
			},
			{
				"answer": "The market size is larger when PrevenT is marketed for normal-risk patients than when it is marketed for high-risk patients.",
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": 2,
					"judgment": 0,
					"synthesis": 1
				},
				"links_to": "SlideDrugQ1_171"
			},
			{
				"answer": "The client can compete more effectively with Clearvenax if PrevenT is marketed for normal-risk patients. ",
				"direction": "right",
				"score": {
					"rigor": 0,
					"structuring": 1,
					"judgment": 0,
					"synthesis": 1
				},
				"links_to": "SlideDrugQ1_171"
			}
		]
	},
	"SlideDrugQ1_160": {
		"question": "How would you do that? What price would you charge for the drug?",
		"choices": [{
				"answer": "Well, actually, we could charge a different price for the drug for each group of patients.",
				"direction": "left",
				"score": {
					"rigor": 0,
					"structuring": 0,
					"judgment": 0,
					"synthesis": 3
				},
				"links_to": "SlideDrugQ1_172"
			},
			{
				"answer": "We could charge the higher price, $14, for both groups of patients.",
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": -5,
					"judgment": 0,
					"synthesis": -5
				},
				"links_to": "SlideDrugQ1_172"
			},
			{
				"answer": "We could charge the lower price, $3, for both groups of patients.",
				"direction": "right",
				"score": {
					"rigor": 0,
					"structuring": -10,
					"judgment": 0,
					"synthesis": -10
				},
				"links_to": "SlideDrugQ1_172"
			}
		]
	},
	"SlideDrugQ1_170": {
		"question": "In that case, what would be your final recommendation on pricing and the group of patients to target?",
		"choices": [{
				"answer": "The client should charge a little less than $11 and market PrevenT for high-risk patients in order to earn a higher profit and have 100% market share among this group.",
				"direction": "left",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 3
				},
				"links_to": "SlideDrugCompleted"
			},
			{
				"answer": "The client should charge a little less than $6 and market PrevenT for normal-risk patients in order to earn a higher contribution margin per year.",
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": -5,
					"judgment": -5,
					"synthesis": -5
				},
				"links_to": "SlideDrugCompleted"
			},
			{
				"answer": "The client should charge a price between $6 and $14 and market PrevenT for both groups of patients in order to capture a higher market share.",
				"direction": "right",
				"score": {
					"rigor": 0,
					"structuring": -5,
					"judgment": -5,
					"synthesis": -5
				},
				"links_to": "SlideDrugCompleted"
			}
		]
	},
	"SlideDrugQ1_171": {
		"question": "That's true, but the client could earn a higher profit if the drug were marketed only for high-risk patients. What would be your final recommendation on pricing and the group of patients to target?",
		"choices": [{
				"answer": "Well, then I would say that the client should charge a little less than $11 and market PrevenT for high-risk patients in order to earn a higher profit and have 100% market share among this group.",
				"direction": "left",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 3
				},
				"links_to": "SlideDrugCompleted"
			},
			{
				"answer": "The client should charge a little less than $6 and market PrevenT for normal-risk patients in order to earn a higher contribution margin per year.",
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": -5,
					"judgment": 1,
					"synthesis": -5
				},
				"links_to": "SlideDrugCompleted"
			},
			{
				"answer": "The client should charge a price between $6 and $14 and market PrevenT for both groups of patients in order to capture a higher market share.",
				"direction": "right",
				"score": {
					"rigor": 0,
					"structuring": -5,
					"judgment": -5,
					"synthesis": -10
				},
				"links_to": "SlideDrugCompleted"
			}
		]
	},
	"SlideDrugQ1_172": {
		"question": "That would go against the principles of value-based pricing. The price for the drug would turn out to be different from its economic value for hospitals, for each group of patients. Moreover, the client would earn a higher profit if PrevenT were marketed only for high-risk patients.What would be your final recommendation on pricing and the group of patients to target?",
		"choices": [{
				"answer": "Well, then I would say that the client should charge a little less than $11 and market PrevenT for high-risk patients in order to earn a higher profit and have 100% market share among this group.",
				"direction": "left",
				"score": {
					"rigor": 0,
					"structuring": 3,
					"judgment": 0,
					"synthesis": 3
				},
				"links_to": "SlideDrugCompleted"
			},
			{
				"answer": "The client should charge a little less than $6 and market PrevenT for normal-risk patients in order to earn a higher contribution margin per year.",
				"direction": "middle",
				"score": {
					"rigor": 0,
					"structuring": -5,
					"judgment": -5,
					"synthesis": -5
				},
				"links_to": "SlideDrugCompleted"
			},
			{
				"answer": "The client should charge a price between $6 and $14 and market PrevenT for both groups of patients in order to capture a higher market share.",
				"direction": "right",
				"score": {
					"rigor": 0,
					"structuring": -5,
					"judgment": 1,
					"synthesis": -10
				},
				"links_to": "SlideDrugCompleted"
			}
		]
	},
	"SlideDrugCompleted": {
		"successMessage": "In this case interview, you have helped the client, a drug-manufacturing company, formulate a strategy to decide on the price of a new product, PrevenT, in light of competition from existing drugs. This exercise required you to apply several skills:"
	},
	"table-r": {
		"question": "From the data given below, calculate the total savings from using PrevenT per patient compared to Clearvenax.",
		"messageHeading": "Well done!",
		"messageDescription": "You got the figure absolutely correct. The savings from using PrevenT will indeed be $60.00.",
		"messageHeadingLow": "That's not quite right.",
		"messageDescriptionLow": "There will be more savings from using PrevenT.  You will first need to calculate reduction in complication rates and then factor them against the costs.",
		"messageHeadingHigh": "That's not quite right.",
		"messageDescriptionHigh": "Your calculations are on the high side. You will first need to calculate reduction in complication rates and then factor them against the costs.",
		"correctAnswer": 60,
		"score": {
			"rigor": 2,
			"structuring": 2,
			"judgment": 2,
			"synthesis": 2
		},
		"promptData": {
			"title": "Total savings from using PrevenT"
		},
		"tableData": {
			"tables": [{
				"title": "Complications Cost Data",
				"rows": [{
						"columns": [{
								"label": "Complications"
							},
							{
								"label": "DVT"
							},
							{
								"label": "PE"
							},
							{
								"label": "Bleed"
							}
						]
					},
					{
						"columns": [{
								"label": "Complications - Clearvenax"
							},
							{
								"label": "20%"
							},
							{
								"label": "1%"
							},
							{
								"label": "1%"
							}
						]
					},
					{
						"columns": [{
								"label": "Complications - PrevenT"
							},
							{
								"label": "10%"
							},
							{
								"label": "3%"
							},
							{
								"label": "5%"
							}
						]
					},
					{
						"columns": [{
								"label": "Costs per Complication"
							},
							{
								"label": "$1,600.00"
							},
							{
								"label": "$2,500.00"
							},
							{
								"label": "$1,250.00"
							}
						]
					}
				]
			}]
		}
	},
	"table-o": {
		"question": "From the data given below, calculate the additional economic value of 1 dose of PrevenT for the customer.  Assume that a patient would need 30 doses.",
		"messageHeading": "Well done!",
		"messageDescription": "You got the figure absolutely correct. The additional economic value of one dose of PrevenT is $2.00.",
		"messageHeadingLow": "That's not quite right.",
		"messageDescriptionLow": "The additional economic value of one dose of PrevenT is higher than what you've calculated. You just need to divide the total savings for the customer with the number of doses required to get the correct answer.",
		"messageHeadingHigh": "That's not quite right.",
		"messageDescriptionHigh": "The additional economic value of one dose of PrevenT is lower than what you've calculated. You just need to divide the total savings for the customer with the number of doses required to get the correct answer.",
		"currState": 0,
		"score": {
			"rigor": 2,
			"structuring": 2,
			"judgment": 2,
			"synthesis": 2
		},
		"correctAnswer": 2,
		"promptData": {
			"title": "Additional Economic Value of 1 dose of PrevenT"
		},
		"tableData": {
			"tables": [{
				"title": "Complications Cost Data",
				"rows": [{
						"columns": [{
								"label": "Complications"
							},
							{
								"label": "DVT"
							},
							{
								"label": "PE"
							},
							{
								"label": "Bleed"
							}
						]
					},
					{
						"columns": [{
								"label": "Complications - Clearvenax"
							},
							{
								"label": "20%"
							},
							{
								"label": "1%"
							},
							{
								"label": "1%"
							}
						]
					},
					{
						"columns": [{
								"label": "Complications - PrevenT"
							},
							{
								"label": "10%"
							},
							{
								"label": "3%"
							},
							{
								"label": "5%"
							}
						]
					},
					{
						"columns": [{
								"label": "Costs per Complication"
							},
							{
								"label": "$1,600.00"
							},
							{
								"label": "$2,500.00"
							},
							{
								"label": "$1,250.00"
							}
						]
					},
					{
						"columns": [{
								"label": "Savings from using PrevenT"
							},
							{
								"label": "$160.00"
							},
							{
								"label": "-$50.00"
							},
							{
								"label": "-$50.00"
							}
						]
					}
				]
			}]
		}
	},
	"table-s": {
		"question": "From the data given below, calculate the manufacturer's unit ( per dose ) contribution margin by manufacturing PrevenT.",
		"messageHeading": "Well done!",
		"messageDescription": "You got the figure absolutely correct. The manufacturer's contribution margin per unit is $4.00.",
		"messageHeadingLow": "That's not quite right.",
		"messageDescriptionLow": "The manufacturer's unit contribution margin is higher than what you've calculated.",
		"messageHeadingHigh": "That's not quite right.",
		"messageDescriptionHigh": "The manufacturer's unit contribution margin is lower than what you've calculated.",
		"currState": 0,
		"score": {
			"rigor": 2,
			"structuring": 2,
			"judgment": 2,
			"synthesis": 2
		},
		"correctAnswer": 4,
		"promptData": {
			"title": "Manufacturer's unit (per dose) contribution margin"
		},
		"tableData": {
			"tables": [{
				"title": "PrevenT Pricing Information",
				"rows": [{
						"columns": [{
								"label": "Maximum final price/dose"
							},
							{
								"label": "$6.00"
							}
						]
					},
					{
						"columns": [{
								"label": "Production cost PrevenT/dose"
							},
							{
								"label": "$2.00"
							}
						]
					},
					{
						"columns": [{
								"label": "Required doses/patient"
							},
							{
								"label": "30"
							}
						]
					}
				]
			}]
		}
	},
	"table-a": {
		"question": "From the data given below, calculate the manufacturer's annual contribution margin by manufacturing PrevenT.",
		"messageHeading": "Well done!",
		"messageDescription": "You got the figure absolutely correct. The manufacturer's contribution margin per year is $96 million.",
		"messageHeadingLow": "That's not quite right.",
		"messageDescriptionLow": "The manufacturer's contribution margin is higher than what you've calculated. Try calculating the contribution margin per dose and then multiply it with the total number of doses that will be required in a year.",
		"messageHeadingHigh": "That's not quite right.",
		"messageDescriptionHigh": "The manufacturer's contribution margin is lower than what you've calculated. Try calculating the contribution margin per dose and then multiply it with the total number of doses that will be required in a year.",
		"currState": 0,
		"score": {
			"rigor": 2,
			"structuring": 2,
			"judgment": 2,
			"synthesis": 2
		},
		"correctAnswer": 96000000,
		"promptData": {
			"title": "Manufacturer's contribution/year"
		},
		"tableData": {
			"tables": [{
				"title": "PrevenT Pricing Information",
				"rows": [{
						"columns": [{
								"label": "Maximum final price/dose"
							},
							{
								"label": "$6.00"
							}
						]
					},
					{
						"columns": [{
								"label": "Production cost PrevenT/dose"
							},
							{
								"label": "$2.00"
							}
						]
					},
					{
						"columns": [{
								"label": "Required doses/patient"
							},
							{
								"label": "30"
							}
						]
					},
					{
						"columns": [{
								"label": "Number of patients/year"
							},
							{
								"label": "800,000"
							}
						]
					}
				]
			}]
		}
	},
	"table-l": {
		"question": "From the data given below, calculate the maximum price* of prevenT for the high-risk group. Assume the number of doses required per patient to be 30.",
		"bottomFootnote": "*Round off your answer to the closest integral value.",
		"messageHeading": "Well done!",
		"messageDescription": "You got the figure absolutely correct. The maximum price of PrevenT for the high-risk group can be $14.00.",
		"messageHeadingLow": "That's not quite right.",
		"messageDescriptionLow": "The maximum price of PrevenT for the high risk group is higher than what you've calculated. First, calculate the economic value add of one dose of PrevenT and then add it to the price per dose of Clearvenax to get the maximum price.",
		"messageHeadingHigh": "That's not quite right.",
		"messageDescriptionHigh": "The maximum price of PrevenT for the high risk group is lower than what you've calculated. First, calculate the economic value add of one dose of PrevenT and then add it to the price per dose of Clearvenax to get the maximum price.",
		"currState": 0,
		"score": {
			"rigor": 2,
			"structuring": 2,
			"judgment": 2,
			"synthesis": 2
		},
		"correctAnswer": 14,
		"promptData": {
			"title": "Maximum final price per dose"
		},
		"tableData": {
			"tables": [{
				"title": "Complications Cost Data",
				"rows": [{
						"columns": [{
								"label": "Complications"
							},
							{
								"label": "DVT"
							},
							{
								"label": "PE"
							},
							{
								"label": "Bleed"
							}
						]
					},
					{
						"columns": [{
								"label": "Complications - Clearvenax"
							},
							{
								"label": "25%"
							},
							{
								"label": "2%"
							},
							{
								"label": "1%"
							}
						]
					},
					{
						"columns": [{
								"label": "Complications - PrevenT"
							},
							{
								"label": "5%"
							},
							{
								"label": "2%"
							},
							{
								"label": "3%"
							}
						]
					},
					{
						"columns": [{
								"label": "Costs per Complication"
							},
							{
								"label": "$1,600.00"
							},
							{
								"label": "$2,500.00"
							},
							{
								"label": "$1,250.00"
							}
						]
					}
				]
			}]
		}
	},
	"table-c": {
		"question": "Look at the information below carefully.",
		"bottomFootnote": "Note: Figures in brackets indicate negative values.",
		"tableData": {
			"tables": [{
				"title": "Contribution Margin Comparison",
				"rows": [{
						"columns": [{
								"label": "Type of Patients"
							},
							{
								"label": "Normal Risk Patients"
							},
							{
								"label": "High Risk Patients"
							}
						]
					},
					{
						"columns": [{
								"label": "Final competitive price per dose"
							},
							{
								"label": "$3.00"
							},
							{
								"label": "$11.00"
							}
						]
					},
					{
						"columns": [{
								"label": "Production cost PrevenT per dose"
							},
							{
								"label": "($2.00)"
							},
							{
								"label": "($2.00)"
							}
						]
					},
					{
						"columns": [{
								"label": "Manufacturer contribution margin per dose"
							},
							{
								"label": "$1.00"
							},
							{
								"label": "$9.00"
							}
						]
					},
					{
						"columns": [{
								"label": "Required doses per patient"
							},
							{
								"label": "30"
							},
							{
								"label": "30"
							}
						]
					},
					{
						"columns": [{
								"label": "Number of patients/year"
							},
							{
								"label": "800,000"
							},
							{
								"label": "200,000"
							}
						]
					},
					{
						"columns": [{
								"label": "Manufacturer contribution per year"
							},
							{
								"label": "=$ 24 M"
							},
							{
								"label": "=$ 54 M"
							}
						]
					}
				]
			}]
		}
	},
	"table-d": {
		"question": "Look at the information below carefully.",
		"tableData": {
			"tables": [{
					"title": "Clearvenax and PrevenT Comparison Data",
					"rows": [{
							"columns": [{
									"label": "Drug"
								},
								{
									"label": "Clearvenax"
								},
								{
									"label": "PrevenT"
								}
							]
						},
						{
							"columns": [{
									"label": "Price Per Dose"
								},
								{
									"label": "$4.00"
								},
								{
									"label": "To Be Determined"
								}
							]
						},
						{
							"columns": [{
								"label": "Complication Rate"
							}]
						},
						{
							"columns": [{
									"label": "Deep Vein Thrombosis (DVT)"
								},
								{
									"label": "20%"
								},
								{
									"label": "10%"
								}
							]
						},
						{
							"columns": [{
									"label": "Pulmonary Embolism (PE)"
								},
								{
									"label": "1%"
								},
								{
									"label": "3%"
								}
							]
						},
						{
							"columns": [{
									"label": "Major Bleeding"
								},
								{
									"label": "1%"
								},
								{
									"label": "5%"
								}
							]
						}
					]
				},
				{
					"rows": [{
							"columns": [{
								"label": "Cost of complication per patient"
							}]
						},
						{
							"columns": [{
									"label": "Deep Vein Thrombosis (DVT)"
								},
								{
									"label": "$1,600.00"
								}
							]
						},
						{
							"columns": [{
									"label": "Pulmonary Embolism (PE)"
								},
								{
									"label": "$2,500.00"
								}
							]
						},
						{
							"columns": [{
									"label": "Major Bleeding"
								},
								{
									"label": "$1,250.00"
								}
							]
						}
					]
				}
			]
		}
	}
}