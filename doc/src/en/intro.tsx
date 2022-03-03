import React, { useEffect, useRef, useState } from 'react'
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
  IconRef,
} from 'xueyan-react-icon'

export default function Main() {
  const [ loading, setLoading ] = useState<boolean>(true)
  const iconRef = useRef<IconRef>(null)

  useEffect(() => {
    console.log(iconRef)
  }, [])
  
  return (
    <div style={{ color: '#f70' }}>
      <div>
        <ArrowIcon color="#07f" size="12" />
        <ArrowIcon color="#07f" size="14" />
        <ArrowIcon ref={iconRef} />
        <ArrowIcon color="#07f" size="18" />
        <ArrowIcon color="#07f" size="20" />
      </div>
      <div>
        <ArrowIcon direction='top' />
        <ArrowIcon direction='right' />
        <ArrowIcon direction='bottom' />
        <ArrowIcon direction='left' />
      </div>
      <div>
        <ArrowIcon marginLeft={20} display="block" />
      </div>
      <div>
        <LoadingIcon rotating={-500} />
        <LoadingIcon rotating={500} />
      </div>
      <div>
        <SearchIcon />
        <SearchIcon flipX />
        <SearchIcon flipY />
        <SearchIcon flipX flipY />
      </div>
      <div>
        <LoadingIcon paused={!loading} />
        <span onClick={() => setLoading(!loading)}>转动或停止</span>
      </div>
      <div>
        <ArrowIcon />
        <SearchIcon />
        <LoadingIcon />
        <BellIcon />
        <CheckIcon />
        <CircleIcon />
        <ClipIcon />
        <br />
        <CloseIcon />
        <CodeIcon />
        <DecreaseIcon />
        <DeleteIcon />
        <DirectionIcon />
        <DoubtIcon />
        <DownloadIcon />
        <br />
        <DragIcon />
        <EditIcon />
        <ErrorIcon />
        <ExportIcon />
        <FileIcon />
        <FolderIcon />
        <FontIcon />
        <br />
        <HomeIcon />
        <ImportIcon />
        <IncreaseIcon />
        <InfoLineIcon />
        <InfoIcon />
        <InvisibleIcon />
        <LabelLineIcon />
        <br />
        <LabelIcon />
        <LockedIcon />
        <MenuIcon />
        <MessageIcon />
        <MinusIcon />
        <MoonIcon />
        <MoreIcon />
        <br />
        <PauseIcon />
        <PendingIcon />
        <PlayIcon />
        <PlusIcon />
        <PowerIcon />
        <QuestionLineIcon />
        <QuestionIcon />
        <br />
        <RejectedIcon />
        <ResolvedIcon />
        <ScanIcon />
        <ShareIcon />
        <SighIcon />
        <StarLineIcon />
        <StarIcon />
        <br />
        <StepIcon />
        <StopIcon />
        <SuccessIcon />
        <SunIcon />
        <TimeIcon />
        <TransactionIcon />
        <UnlockIcon />
        <br />
        <UploadIcon />
        <VisibleIcon />
        <WarningIcon />
      </div>
    </div>
  )
}
