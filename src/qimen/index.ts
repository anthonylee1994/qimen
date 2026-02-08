/**
 * 奇門遁甲排盤系統
 *
 * 完整的奇門遁甲排盤算法實現
 *
 * @example
 * ```typescript
 * import { QimenUtil } from '@/qimen'
 * import { Lunar } from 'lunar-typescript'
 *
 * const lunar = Lunar.fromYmdHms(2024, 5, 10, 14, 30, 0)
 * const qimenPan = QimenUtil.create(lunar)
 * QimenUtil.prettyLog(qimenPan)
 * ```
 *
 * @packageDocumentation
 */

// 主要工具類
export {QimenUtil} from "./QimenUtil";
export {LunarUtil} from "./LunarUtil";
export {QimenFormatUtil} from "./FormatUtil";

// 類型定義
export type {
    // 基礎類型
    五行,
    天干,
    陽天干,
    陰天干,
    地支,
    陽地支,
    陰地支,
    六十甲子,

    // 奇門專用類型
    旬首,
    三奇,
    六儀,
    三奇六儀,
    上中下元,
    遁,
    局數,
    節氣,
    八字,

    // 九宮要素
    宮位,
    八神,
    九星,
    八門,
    四驛馬,

    // 數據結構
    QimenCell,
    QimenPan,
    十二長生,
} from "./type";

// 導出常量（查表數據）
export {
    飛星轉轉盤序,
    轉盤轉飛星序,
    三奇六儀序,
    宮位飛星序,
    宮位轉盤序,
    八神序,
    九星序,
    八門序,
    天干序,
    地支序,
    旬首表,
    空亡表,
    驛馬表,
    六儀遁表,
    上中下元表,
    節氣遁表,
    局數表,
    旺相休囚死表,
    宮位地支表,
} from "./dictionary";
