<?php

/**
 * Cookiebanner plugin for Craft CMS 3.x
 *
 * Provides a javascript based cookie banner implementation.
 *
 * @link      https://dotsandlines.io
 * @copyright Copyright (c) 2020 dotsandlines GmbH
 */

namespace dotsandlines\cookiebanner;

use dotsandlines\cookiebanner\twigextensions\CookiebannerTwigExtension;
use dotsandlines\cookiebanner\models\Settings;
use dotsandlines\cookiebanner\services\Rendering as RenderingService;
use dotsandlines\cookiebanner\variables\Cookiebanner as CookiebannerVariable;

use Craft;
use craft\base\Plugin;
use craft\services\Plugins;
use craft\events\PluginEvent;
use craft\web\UrlManager;
use craft\events\RegisterUrlRulesEvent;
use yii\base\Event;
use craft\web\twig\variables\CraftVariable;



/**
 * Class Cookiebanner
 *
 * @author    dotsandlines GmbH
 * @package   Cookiebanner
 * @since     1.0.0
 *
 * @property  RenderingService $renderingService
 */
class Cookiebanner extends Plugin
{
	// Static Properties
	// =========================================================================

	/**
	 * @var Cookiebanner
	 */
	public static $plugin;


	// Public Properties
	// =========================================================================

	/**
	 * @var string
	 */
	public $schemaVersion = '1.0.0';

	/**
	 * @var bool
	 */
	public $hasCpSettings = false;

	/**
	 * @var bool
	 */
	public $hasCpSection = true;

	// Public Methods
	// =========================================================================

	/**
	 * @inheritdoc
	 */
	public function init()
	{
		parent::init();

		self::$plugin = $this;

		$this->controllerNamespace = 'dotsandlines\\cookiebanner\\controllers';


		// Register Services
		$this->setComponents([
			'renderingService' => RenderingService::class,
		]);


		// Register Admin Route Template
		Event::on(
			UrlManager::class,
			UrlManager::EVENT_REGISTER_CP_URL_RULES,
			function (RegisterUrlRulesEvent $event) {
				$event->rules['cookiebanner'] = ['template' => 'cookiebanner/cp/cookiebanner'];
			}
		);


		Event::on(
			Plugins::class,
			Plugins::EVENT_AFTER_INSTALL_PLUGIN,
			function (PluginEvent $event) {
				if ($event->plugin === $this) {
				}
			}
		);

		// Expose Vars to Twig 
		Event::on(CraftVariable::class, CraftVariable::EVENT_INIT, function (Event $event) {
			/** @var CraftVariable $variable */
			$variable = $event->sender;
			$variable->set('cookiebanner', CookiebannerVariable::class);
		});


		Craft::info(
			Craft::t(
				'cookiebanner',
				'{name} plugin loaded',
				['name' => $this->name]
			),
			__METHOD__
		);
	}

	// Protected Methods
	// =========================================================================
	protected function createSettingsModel()
	{
		return new Settings();
	}
}
