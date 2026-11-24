export interface UserProfile {
  id: string;
  name: string;
  email: string;
  preferredLanguage: string;
  createdAt: string;
}

export interface Speaker {
  id: string;
  name: string;
  color?: string;
}

export interface TranscriptSegment {
  id: string;
  sessionId: string;
  speakerId?: string;
  originalText: string;
  translatedText: string;
  sourceLanguage: string;
  targetLanguage: string;
  timestamp: number;
  endTimestamp?: number;
  isFinal: boolean;
}

export interface ConversationSession {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  durationSeconds: number;
  sourceLanguage: string;
  targetLanguage: string;
  speakers: Speaker[];
  segments: TranscriptSegment[];
  status: 'active' | 'completed' | 'archived';
  tags?: string[];
}

export interface Decision {
  id: string;
  text: string;
  segmentId?: string;
  owner?: string;
  status: 'open' | 'done';
}

export interface TaskItem {
  id: string;
  text: string;
  assignee?: string;
  dueDate?: string;
  segmentId?: string;
  completed: boolean;
}

export interface Risk {
  id: string;
  text: string;
  severity: 'low' | 'medium' | 'high';
  segmentId?: string;
}

export interface MeetingSummary {
  id: string;
  sessionId: string;
  overview: string;
  keyPoints: string[];
  decisions: Decision[];
  tasks: TaskItem[];
  questions: string[];
  risks: Risk[];
  fishbone?: {
    problem: string;
    categories: { name: string; causes: string[] }[];
  };
  generatedAt: string;
  isDemo?: boolean;
}

export interface UserSettings {
  preferredSourceLang: string;
  preferredTargetLang: string;
  autoDetectLanguage: boolean;
  textSize: 'sm' | 'md' | 'lg';
  theme: 'light' | 'system';
  dataRetentionDays: number;
  notificationsEnabled: boolean;
  localProcessingPreferred: boolean;
}
