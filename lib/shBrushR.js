/**
 * R brush for SyntaxHighlighter
 *
 * Inspired by Yihui Xie's brush http://yihui.name/en/2010/09/syntaxhighlighter-brush-for-the-r-language
 *
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * @copyright
 * Copyright (C) 2015 Brian Connelly, 2004-2010 Alex Gorbatchev
 *
 * @license
 * Licensed under the MIT license.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
        var keywords = 'if else repeat while function for in next break'
        var constants = 'LETTERS letters month.abb month.name pi';
        var special = 'TRUE FALSE NULL Inf NaN NA NA_integer_ NA_real_ NA_complex_ NA_character_'

        this.regexList = [
            { regex: SyntaxHighlighter.regexLib.singleLinePerlComments, css: 'comments' },
            { regex: SyntaxHighlighter.regexLib.singleQuotedString,     css: 'string' },
            { regex: SyntaxHighlighter.regexLib.doubleQuotedString,     css: 'string' },
            { regex: new RegExp(this.getKeywords(keywords), 'gm'),      css: 'keyword' },

            // Dots as keyword
            { regex: /\.{3}/gm,                                         css: 'keyword' },
            { regex: new RegExp(this.getKeywords(constants), 'gm'),     css: 'constants' },
            { regex: new RegExp(this.getKeywords(special), 'gm'),       css: 'color3' },
            { regex: /[\w._]+[ \t]*(?=\()/gm,                           css: 'functions' },
            { regex: /\:{1}/gm,                                         css: 'functions' },
            { regex: /\b\d+\.?\w*/g,                                    css: 'value' },

            // Operators as color1 ----------------------------------------------------
            // Arithmetic
            { regex: /\+|\-|\*|\/|\^|\%\%|\%\/\%/gm,                    css: 'color1' },
            // Comparison
            { regex: /&lt;=|&gt;=|&lt;|&gt;|\!=|==/gm,                  css: 'color1' },
            // Extract
            { regex: /\$|\@/gm,                                         css: 'color1' },
            // Logic
            { regex: /\!|&amp;&amp;|&amp;|\|\||\|/gm,                   css: 'color1' },
            // Namespace
            { regex: /\:{2,3}/gm,                                       css: 'color1' },
            // Formulae, colon operator, help
            { regex: /\~|\:{1}|\?/gm,                                   css: 'color1' },
            // Assignment
            { regex: /&lt;&lt;\-|&lt;\-|\-&gt;&gt;|\-&gt;|=/gm,         css: 'color1' },
            // magrittr
            { regex: /\%&gt;\%|\$\%\$|\%T&gt;\%|\%&lt;&gt;\%|\%\.\%/gm, css: 'color1' },

            // Brackets, braces, and parens -------------------------------------------
            { regex: /\[|\]|\{|\}|\(|\)|,/gm,                           css: 'color2' },

            // Variables --------------------------------------------------------------
            // From ?make.names(): "A syntactically valid name consists of letters, numbers and the dot or underline characters and starts with a letter or the dot not followed by a number." - Technically, this regexp could allow an invalid variable e.g. '.2way'
            // This also picks up package names/namespaces
            { regex: /[a-zA-Z\.][a-zA-Z0-9_\.]*/gm,                     css: 'variable' },
        ];

		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);

        //------------------------------------------------
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
    Brush.aliases   = ['r', 's', 'splus'];

	SyntaxHighlighter.brushes.R = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
