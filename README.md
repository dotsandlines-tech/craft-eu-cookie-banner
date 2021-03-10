# EU Cookie Banner plugin for Craft CMS 3.x

Provides a javascript based cookie banner implementation.

![Screenshot](resources/img/plugin-logo.svg)

## Requirements

This plugin requires Craft CMS 3.5 or later.

## Installation

To install the plugin, follow these instructions.

1. Open your terminal and go to your Craft project:

        cd /path/to/project

2. Add a custom vcs in your composer.json file

        "repositories": [
                {
                "type": "vcs",
                "url": "https://github.com/dotsandlines-tech/craft-eu-cookie-banner"
                }
        ],

3. Then tell Composer to load the plugin:

        composer require dotsandlines/cookie-banner

4. In the Control Panel, go to Settings → Plugins and click the “Install” button for Cookie Banner.

## Cookie Banner Overview

-Insert text here-

## Configuring Cookie Banner

General Settings

- Enable Cookiebar
- Cookie Expiry: Type in a number of days, the cookie decision will be saved
- Cookiebar Headline: Enter a headline in the first field if wanted. Use the second field for textinfo.
- Privacy Policy Element: Link the entry with the privacy policy content.
- Privacy Policy Title: Label the "Privacy Policy Element"
- Functional Cookie Title
- Save Preferences Title
- Accept All Title
- Color Settings

Scripts

- Use Categories: Enable categories if wanted
- Cateories: Label each category and fill in Script Code such as Google Analytics
- All Scripts: Enter Script Code if categories are disabled.

## Using Cookie Banner

1. In the Control Panel, go to "Cookiebanner" and "enable Cookiebar"

2. Fill in the fields

3. Add the following line in your twig template to render the cookie banner

        {{ craft.cookiebanner.renderCookieBanner }}

## Cookie Banner Roadmap

Some things to do, and ideas for potential features:

* Release it

Brought to you by [dotsandlines GmbH](https://dotsandlines.io)
