<?php

namespace dotsandlines\cookiebanner\models;

use craft\base\Model;

class Settings extends Model
{

	// General Settings
	public $enableCookiebar;
	public $cookieExpiry;
	public $cookieBarHeadline;
	public $cookieBarText;
	public $cookieBarPrivacyPolicyTitle;
	public $cookieBarPrivacyPolicyEntryId;
	public $cookieBarSavePreferencesTitle;
	public $cookieBarAcceptAllTitle;
	public $cookieBarFunctionalCookiesTitle;

	// Scripts
	public $cookieBarCategories;
	public $cookieEnableBarCategories;
	public $cookieBarAllScripts;

	// Colors
	public $cookieBarPrimaryColor;
	public $cookieBarBackgroundColor;
	public $cookieBarTextColor;


	// public function rules()
	// {
	//     return [
	//         [['foo', 'bar'], 'required'],
	//         // ...
	//     ];
	// }
}
