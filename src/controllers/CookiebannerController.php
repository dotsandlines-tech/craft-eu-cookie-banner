<?php

/**
 * Cookiebanner plugin for Craft CMS 3.x
 *
 * Provides a javascript based cookie banner implementation.
 *
 * @link      https://dotsandlines.io
 * @copyright Copyright (c) 2020 dotsandlines GmbH
 */

namespace dotsandlines\cookiebanner\controllers;

use dotsandlines\cookiebanner\Cookiebanner;

use Craft;
use craft\web\Controller;

/**
 * @author    dotsandlines GmbH
 * @package   Cookiebanner
 * @since     1.0.0
 */
class CookiebannerController extends Controller
{

	// Protected Properties
	// =========================================================================

	/**
	 * @var    bool|array Allows anonymous access to this controller's actions.
	 *         The actions must be in 'kebab-case'
	 * @access protected
	 */
	protected $allowAnonymous = [];

	/**
	 * @return mixed
	 */
	public function actionSubmit()
	{

		$this->requireAdmin();

		$request = Craft::$app->getRequest();

		$submittedSettings = $request->getParam('settings');

		$cookieBanner = Cookiebanner::getInstance();
		$result = Craft::$app->plugins->savePluginSettings($cookieBanner, $submittedSettings);
		if ($result) {
			Craft::$app->getSession()->setNotice(Craft::t(
				'cookiebanner',
				'Saved successfully')
			);
		} else {
			Craft::$app->getSession()->setError(Craft::t(
				'cookiebanner',
				'Can´t save settings, please check input')
			);
		}
	}
}
