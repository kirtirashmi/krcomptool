import React, { useState } from "react";
import Users from "./Users";
import Logo from "./Logo.png";
import { Link } from "react-router-dom";
import { BsGrid1X2Fill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";

function Sidebar({ openSidebarToggle, OpenSidebar, onItemSelect }) {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const handleDropdown1 = (isOpen) => {
    setShowDropdown1(isOpen);
    setShowDropdown2(false);
  };

  const handleDropdown2 = (isOpen) => {
    setShowDropdown2(isOpen);
  };

  const handleLinkClick = (item) => {
    onItemSelect(item);
  };

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
      style={{ zIndex: 1 }}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img src={Logo} alt="Logo" />
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      {/* Level 1 Dropdown */}
      <Dropdown
        show={showDropdown1}
        onToggle={(isOpen) => handleDropdown1(isOpen)}
      >
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          style={{ border: "none", background: "transparent" }}
        >
          DropLevel1
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {/* Level 2 Dropdown */}
          <Dropdown
            show={showDropdown2}
            onToggle={(isOpen) => handleDropdown2(isOpen)}
          >
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              style={{
                border: "none",
                background: "transparent",
                color: "black",
              }}
            >
              DropLevel2
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {/* Level 3 Items */}
              <Dropdown.Item
                onClick={() => handleLinkClick("CompanySiteHandling")}
              >
                <BsFillGrid3X3GapFill className="icon" />
                <Link
                  to="/Users"
                  style={{ textDecoration: "none", color: "#9e9ea4" }}
                >
                  Company Site
                </Link>
              </Dropdown.Item>
              <Dropdown.Item
                href="#"
                onClick={() => handleLinkClick("UserHandling")}
              >
                <BsFillGrid3X3GapFill className="icon" />
                <Link
                  to="/Users"
                  style={{ textDecoration: "none", color: "#9e9ea4" }}
                >
                  User
                </Link>
              </Dropdown.Item>
              <Dropdown.Item
                href="#"
                onClick={() => handleLinkClick("UsersPerCompanyHandling")}
              >
                {" "}
                <BsFillGrid3X3GapFill className="icon" />
                <Link
                  to="/Users"
                  style={{ textDecoration: "none", color: "#9e9ea4" }}
                >
                  Users Per Company
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Menu>
      </Dropdown>

      {/* <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="#">
            <BsGrid1X2Fill className="icon" />
            <Link to="/" style={{ textDecoration: "none", color: "#9e9ea4" }}>
              Dashboard
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("CompanySiteHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Company Site
            </Link>
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("UserHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              User
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("UsersPerCompanyHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Users Per Company
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("SitesPerUserHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Sites Per User
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("ObjectSeriesHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Object Series
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("ObjectPhysicalLocationsHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Object Physical Locations
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("ProjectGroupHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Project Groups
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("AccountHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Account
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("AccountGroupsHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Account Groups
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("AccountTypesHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Account Types
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("AccountingPeriodsHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Accounting Periods
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("AcquisitionAccountsHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Acquisition Accounts
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("AuthorityClasses")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Authority Classes
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("AuthorityCombinations")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Authority Combinations
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("BankIdentifierCodesBicHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Bank Identifier Codes Bic
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("BankTransactionCodesHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Bank Transaction Codes
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("CashAccountsHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Cash Accounts
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("CheckCancellationReasonsHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Check Cancellation Reasons
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("CheckHandlingCodesHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Check Handling Codes
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("CheckTemplatesHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Check Templates
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("CodePartValuesHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Code Part Values
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("CodeStringCompletionHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Code String Completion
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("CombinationRulesHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Combination Rules
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("CostRevElementsHanding")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Cost Rev Elements
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() =>
              handleLinkClick("CostRevenueElementPerCodePartValueHandling")
            }
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Cost Revenue Element Per Code Part Value
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("IsoCurrenciesHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Iso Currencies
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("CurrencyCodesHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Currency Codes
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("CurrencyRateTypesHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Currency Rate Types
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("CurrencyRevaluationBasicData")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Currency Revaluation Basic Data
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("CustomerGroupsHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Customer Groups
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("CustomerInvoiceTypesHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Customer Invoice Types
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("DepreciationCalendarHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Depreciation Calendar
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("DepreciationMethodHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Depreciation Method
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("DocumentFooterHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Document Footer
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("FixedAssetsBooksHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Fixed Assets Books
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("IbanValidationInformationHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Iban Validation Information
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("InvoicePaymentAuthorizersHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Invoice Payment Authorizers
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("InvoicePostingAuthorizersHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Invoice Posting Authorizers
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("ObjectClassesHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Object Classes
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("ObjectGroupHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Object Group
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("PaymentFormatsPerCompanyHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Payment Formats Per Company
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("PaymentInstitutesHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Payment Institutes
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("PaymentMethodsHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Payment Methods
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("PaymentTermHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Payment Term
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("PostingControlHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Posting Control
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("ReminderTemplatesHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Reminder Templates
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("RevaluationAccountsHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Revaluation Accounts
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("RevaluationPostingCodeParts")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Revaluation Posting Code Parts
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("SupplierGroupsHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Supplier Groups
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("TaxBooksHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Tax Books
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("TaxCodesHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Tax Codes
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("TaxGroupHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Tax Group
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("TaxIdTypesHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Tax Id Types
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("TaxLedgerParametersHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Tax Ledger Parameters
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("TaxLiabilityDateControlHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Tax Liability Date Control
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("TaxTemplateColumnControlHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Tax Template Column Control
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("TaxTemplateFieldControlHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Tax Template Field Control
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("TaxTemplatesHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Tax Templates
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("TransactionReasonsHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Transaction Reasons
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("UserGroupsHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              User Groups
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("UserGroupPerPeriodHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              User Group Per Period
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("UsersPerUserGroupHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Users Per User Group
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("UsersPerAuthorityClass")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Users Per Authority Class
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("UserRelatedVoucherData")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              User Related Voucher Data
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("VoucherTypeHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Voucher Type
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("PseudoCodesHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Pseudo Codes
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("OrganizationLevelsHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Organization Levels
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("PropertyFieldDefinitionHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Property Field Definition
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("EmploymentTypesHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Employment Types
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("AccessAttributeHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Access Attribute
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("AccessRoleHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Access Role
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("CompanyDetailsHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Company Details
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("CycleSchedulesHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Cycle Schedules
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("SetupWorkTimeCalendars")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Set up Work Time Calendars
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("EmployeeCategoryHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Employee Category
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() =>
              handleLinkClick("EmployeeFreeFieldDefinitionHandling")
            }
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Employee Free Field Definition
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("EmployeePaymentMethodsHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Employee Payment Methods
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("EmployeeSchedulesAndRulesHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Employee Schedules And Rules
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("EmployeeStatusHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Employee Status
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("ExpenseRuleHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Expense Rule
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("WorkHourFlexDayRuleHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Work Hour Flex Day Rule
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("GenderTypeHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Gender Type
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("Iso20022ConfigurationHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Iso 20022 Configuration
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("JobsHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Jobs
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("JobGradesHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Job Grades
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("MileageLimitsHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Mileage Limits
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("BankDetailsHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Bank Details
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("IbanValidationInfoHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Iban Validation Info
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("PersonHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Person
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("PositionAccessSetupHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Position Access Setup
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("PositionsHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Positions
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("ReasonsForLeavingHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Reasons For Leaving
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("RejectionReasonHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Rejection Reason
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("RoundingRuleDefinitionHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Rounding Rule Definition
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("ShiftHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Shift
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("WageClassesHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Wage Classes
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("WageCodesHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Wage Codes{" "}
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("WorkLocationHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Work Location
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("ProjectForecastHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Project Forecast Handling
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("CostElementCodePartDemandHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Cost Element Code Part Demand
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() =>
              handleLinkClick("ManualActivityConnectionListHandling")
            }
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Manual Activity Connection List
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("ProjectRoleBasicListHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Project Role Basic List
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("OverheadCriteriaHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Overhead Criteria
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("OverheadDefinitionsHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Overhead Definitions
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("OverheadRulesHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Overhead Rules
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() =>
              handleLinkClick("ProjectBudgetControlBasicDataHandling")
            }
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Project Budget Control Basic Data
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("ProjectCategory1GlobalHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Project Category1 Global
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("ProjectCategory1ListHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Project Category1 List
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("ProjectCategory2GlobalHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Project Category2 Global
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("ProjectCategory2OverviewHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Project Category2 Overview
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("ProjectProgramGlobalHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Project Program Global
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("ProjectProgramsHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Project Programs
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("ProjectTeamHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Project Team
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() =>
              handleLinkClick("ProjectReportCostBasicDataHandling")
            }
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Project Report Cost Basic Data
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() =>
              handleLinkClick("ProjectReportCodeBasicDataHandling")
            }
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Project Report Code Basic Data
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("ResourceCriteriaTemplateHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Resource Criteria Template
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("SalesChargeTypeHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Sales Charge Type
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("SalesContractAddressTypeHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Sales Contract Address Type
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("Category1Handling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Category1 Handling
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("Category2Handling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Category2 Handling
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("SalesContractItemTypesHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Sales Contract Item Types
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("SalesDiscountTypesHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Sales Discount Types
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("SalesGroupsHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Sales Groups
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("SalesPriceGroupsHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Sales Price Groups
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("SalesWinAndLoseReasonsHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Sales Win And Lose Reasons
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("SalesContractNumberHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Sales Contract Number
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("StandardCostsHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Standard Costs
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("TeamMembersHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Team Members
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("PurchaseGroupsHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Purchase Groups
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("CommodityGroupsHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Commodity Groups
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("BuyersHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Buyers
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("CancellationReasonsHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Cancellation Reasons
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("CoordinatorGroupsHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Coordinator Groups
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("OrderCoordinatorHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Order Coordinator
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("CustomerOrderTypesHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Customer Order Types
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("CustomerStatisticGroupsHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Customer Statistic Groups
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("CustomsStatisticsNumberHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Customs Statistics Number
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("DeliveryTermsHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Delivery Terms
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("InventoryLocationGroupsHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Inventory Location Groups
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("InventoryLocationsHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Inventory Locations
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("PartInspectionCodesHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Part Inspection Codes
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("PurchaseChargeGroupHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Purchase Charge Group
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("PurchaseChargeTypeHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Purchase Charge Type
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() =>
              handleLinkClick("PurchaseMilestoneStagePaymentTemplatesHandling")
            }
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Purchase Milestone Stage Payment Templates
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() =>
              handleLinkClick("PurchaseOrderAuthorizationRuleHandling")
            }
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Purchase Order Authorization Rule
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("RequisitionersHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Requisitioners
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("ShipViaCodesHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Ship Via Codes
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("SupplierStatisticGroupsHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Supplier Statistic Groups
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("UnitsOfMeasureHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Units Of Measure
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("SubstituteScheduleHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Substitute Schedule
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("AbsenceConfigurationGroupHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Absence Configuration Group
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("DeliveryTypesHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Delivery Types
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("InvoiceSeriesHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Invoice Series
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("PaymentFormatMessageCodesHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Payment Format Message Codes
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() =>
              handleLinkClick("CostRevenueBreakdownStructureHandling")
            }
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Cost Revenue Breakdown Structure
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("CostRevBrkdownStrcItmHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Cost Rev Brkdown Strc Itm
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() =>
              handleLinkClick("CostRevenueBreakdownStructureLevelsHandling")
            }
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Cost Revenue Breakdown Structure Levels
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("ResourceGroupsHandling")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Resource Groups
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("SalesContractReasonCodeHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Sales Contract Reason Code
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("SalesContractTypesHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Sales Contract Types
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("ResourceCategoriesHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Resource Categories
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("PurchaseAuthorizers")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Purchase Authorizers
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("PurchaseAuthorizerRejectReason")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Purchase Authorizer Reject Reason
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("PurchaseAuthorizerGroups")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Purchase Authorizer Groups
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("PurchaseApprovalTempate")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Purchase Approval Tempate
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={() => handleLinkClick("VoucherNoSerialSet")}>
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Voucher No Serial Set
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("PurchaseApprovalTemplateLine")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Purchase Approval Template Line
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("DocumentClassesHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Document Classes
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("DocumentTextOutputTypeHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Document Text Output Type
            </Link>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a
            href="#"
            onClick={() => handleLinkClick("DocumentFileTypesHandling")}
          >
            <BsFillGrid3X3GapFill className="icon" />
            <Link
              to="/Users"
              style={{ textDecoration: "none", color: "#9e9ea4" }}
            >
              Document File Types
            </Link>
          </a>
        </li>
      </ul> */}
    </aside>
  );
}

export default Sidebar;
