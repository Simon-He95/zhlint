import { Handler } from '../parser'
import { Options } from './util'

import genSpaceTrimGenerateHandler from './space-trim'

import genPunctuationWidthHandler from './punctuation-width'
import genPunctuationUnificationHandler from './punctuation-unification'

import genAbbrsHandler from './case-abbrs'

import genSpaceOfHyperMarkHandler from './space-hyper-mark'
import genSpaceOfCodeHandler from './space-code'
import genSpaceOfLetterHandler from './space-letter'
import genSpaceOfPunctuationHandler from './space-punctuation'
import genSpaceOfQuotationHandler from './space-quotation'
import genSpaceOfBracketHandler from './space-bracket'

import genLinebreakHandler from './case-linebreak'
import genZhUnitsHandler from './case-zh-units'
import genHtmlEntityHandler from './case-html-entity'

import genSkipPureWesternHandler from './case-pure-western'

const generateHandlers = (options: Options): Handler[] => {
  return [
    genSpaceTrimGenerateHandler(options),

    genPunctuationWidthHandler(options),
    genPunctuationUnificationHandler(options),

    genAbbrsHandler(options),

    genSpaceOfHyperMarkHandler(options),
    genSpaceOfCodeHandler(options),
    genSpaceOfLetterHandler(options),
    genSpaceOfPunctuationHandler(options),
    genSpaceOfQuotationHandler(options),
    genSpaceOfBracketHandler(options),
    genLinebreakHandler(options),

    genZhUnitsHandler(options),
    genHtmlEntityHandler(options),

    genSkipPureWesternHandler(options),
  ]
}

export const defaultConfig: Options = {
  noSinglePair: true,
  halfwidthPunctuation: `()[]{}`,
  fullwidthPunctuation: `，。：；？！“”‘’`,
  adjustedFullwidthPunctuation: `“”‘’`,
  unifiedPunctuation: 'simplified',
  spaceBetweenHalfwidthContent: true,
  noSpaceBetweenFullwidthContent: true,
  spaceBetweenMixedwidthContent: true,
  noSpaceBeforePauseOrStop: true,
  spaceAfterHalfwidthPauseOrStop: true,
  noSpaceAfterFullwidthPauseOrStop: true,
  spaceOutsideHalfwidthQuotation: true,
  noSpaceOutsideFullwidthQuotation: true,
  noSpaceInsideQuotation: true,
  spaceOutsideHalfwidthBracket: true,
  noSpaceOutsideFullwidthBracket: true,
  noSpaceInsideBracket: true,
  spaceOutsideCode: true,
  noSpaceInsideHyperMark: true,
  trimSpace: true,
  skipZhUnits: `年月日天号时分秒`,
  skipAbbrs: [
    'Mr.',
    'Mrs.',
    'Dr.',
    'Jr.',
    'Sr.',
    'vs.',
    'etc.',
    'i.e.',
    'e.g.',
    'a.k.a.'
  ],
  skipPureWestern: true,
}

export default generateHandlers
