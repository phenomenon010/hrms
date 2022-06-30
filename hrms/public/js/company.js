// Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on("Company", {
	onload: function(frm) {
		frm.set_query("default_expense_claim_payable_account", function() {
			return {
				filters: {
					"company": frm.doc.name,
					"is_group": 0,
				}
			};
		});

		frm.set_query("default_employee_advance_account", function() {
			return {
				filters: {
					"company": frm.doc.name,
					"is_group": 0,
					"root_type": "Asset",
				}
			};
		});

		frm.set_query("default_payroll_payable_account", function() {
			return {
				filters: {
					"company": frm.doc.name,
					"is_group": 0,
					"root_type": "Liability",
				}
			};
		});
	}
})