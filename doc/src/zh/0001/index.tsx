import React, { useState } from 'react'
import { Article, Segment } from 'xueyan-react-markdown'
import { IconBox } from './icon-box'
import { Input } from 'xueyan-react-input'
import styles from './index.scss'
import { 
  ArrowIcon, 
  SearchIcon, 
  LoadingIcon, 
  BellIcon,
  CheckIcon,
  CircleIcon,
  ClipIcon,
  CloseIcon,
  CodeIcon,
  DecreaseIcon,
  DeleteIcon,
  DirectionIcon,
  DoubtIcon,
  DownloadIcon,
  DragIcon,
  EditIcon,
  ErrorIcon,
  ExportIcon,
  FileIcon,
  FolderIcon,
  FontIcon,
  HomeIcon,
  ImportIcon,
  IncreaseIcon,
  InfoLineIcon,
  InfoIcon,
  InvisibleIcon,
  LabelLineIcon,
  LabelIcon,
  LockedIcon,
  MenuIcon,
  MessageIcon,
  MinusIcon,
  MoonIcon,
  MoreIcon,
  PauseIcon,
  PendingIcon,
  PlayIcon,
  PlusIcon,
  PowerIcon,
  QuestionLineIcon,
  QuestionIcon,
  RejectedIcon,
  ResolvedIcon,
  ScanIcon,
  ShareIcon,
  SighIcon,
  StarLineIcon,
  StarIcon,
  StepIcon,
  StopIcon,
  SuccessIcon,
  SunIcon,
  TimeIcon,
  TransactionIcon,
  UnlockIcon,
  UploadIcon,
  VisibleIcon,
  WarningIcon,
} from 'xueyan-react-icon'

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Arrow: ArrowIcon, 
  Search: SearchIcon, 
  Loading: LoadingIcon, 
  Bell: BellIcon,
  Check: CheckIcon,
  Circle: CircleIcon,
  Clip: ClipIcon,
  Close: CloseIcon,
  Code: CodeIcon,
  Decrease: DecreaseIcon,
  Delete: DeleteIcon,
  Direction: DirectionIcon,
  Doubt: DoubtIcon,
  Download: DownloadIcon,
  Drag: DragIcon,
  Edit: EditIcon,
  Error: ErrorIcon,
  Export: ExportIcon,
  File: FileIcon,
  Folder: FolderIcon,
  Font: FontIcon,
  Home: HomeIcon,
  Import: ImportIcon,
  Increase: IncreaseIcon,
  InfoLine: InfoLineIcon,
  Info: InfoIcon,
  Invisible: InvisibleIcon,
  LabelLine: LabelLineIcon,
  Label: LabelIcon,
  Locked: LockedIcon,
  Menu: MenuIcon,
  Message: MessageIcon,
  Minus: MinusIcon,
  Moon: MoonIcon,
  More: MoreIcon,
  Pause: PauseIcon,
  Pending: PendingIcon,
  Play: PlayIcon,
  Plus: PlusIcon,
  Power: PowerIcon,
  QuestionLine: QuestionLineIcon,
  Question: QuestionIcon,
  Rejected: RejectedIcon,
  Resolved: ResolvedIcon,
  Scan: ScanIcon,
  Share: ShareIcon,
  Sigh: SighIcon,
  StarLine: StarLineIcon,
  Star: StarIcon,
  Step: StepIcon,
  Stop: StopIcon,
  Success: SuccessIcon,
  Sun: SunIcon,
  Time: TimeIcon,
  Transaction: TransactionIcon,
  Unlock: UnlockIcon,
  Upload: UploadIcon,
  Visible: VisibleIcon,
  Warning: WarningIcon,
}

const ICON_LIST = Object.keys(ICON_MAP)

const MARK1 = `
本组件是利用 SVG Symbol 可复用的特性实现的，支持按需加载图标、自定义图标、转动、旋转、镜像等功能。

组件包内置有以下图标：

> 如果内置图标中，没有你想要的图标，请用 Icon 组件进行自定义。
`

export default function Main() {
  const [keyword, setKeyword] = useState<string>()
  let iconList = ICON_LIST
  if (keyword) {
    const key = keyword.toUpperCase()
    iconList = ICON_LIST.filter(i => i.toUpperCase().includes(key))
  }
  return (
    <Article>
      <Segment>{MARK1}</Segment>
      <Input 
        className={styles.search}
        value={keyword} 
        onChange={setKeyword}
        placeholder="search"
      />
      <div className={styles.list}>
        {iconList.map(k => (
          <IconBox
            key={k} 
            className={styles.item} 
            icon={ICON_MAP[k]} 
            name={k}
          />
        ))}
      </div>
    </Article>
  )
}
