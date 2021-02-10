<?php

/**
 * Cookiebanner plugin for Craft CMS 3.x
 *
 * Provides a javascript based cookie banner implementation.
 *
 * @link      https://dotsandlines.io
 * @copyright Copyright (c) 2020 dotsandlines GmbH
 */

namespace dotsandlines\cookiebanner\services;

use Craft;
use craft\base\Component;
use craft\web\View;
use craft\helpers\Template as TemplateHelper;
use dotsandlines\cookiebanner\Cookiebanner;

use craft\helpers\StringHelper;


class Rendering extends Component
{

	private function setTemplatePathAndRender($renderFunction) {
		$view = Craft::$app->getView();

		// store current template mode
		$oldMode = $view->getTemplateMode();

		// we need to switch to CP Mode to locate plugin template in frontend
		$view->setTemplateMode(View::TEMPLATE_MODE_CP);

		$html = $renderFunction($view);

		// switch back to frontendmode
		$view->setTemplateMode($oldMode);

		return TemplateHelper::raw($html);
	}


	public function renderCookieBanner()
	{
		return $this->setTemplatePathAndRender(function($view) {
			// receive template result
			return $view->renderTemplate("cookiebanner/frontend/cookiebanner");
		});
	}

	public function renderCSSDefaultColorStylings()
	{
		return $this->setTemplatePathAndRender(function($view) {
			// receive template result
			return $view->renderTemplate("cookiebanner/frontend/stylings");
		});
	}



	public function renderJavaScriptOfCategories()
	{
		return $this->setTemplatePathAndRender(function($view) {
			return $view->renderTemplate("cookiebanner/frontend/scripts");
		});
	}
}
