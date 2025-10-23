// User types
export interface UserProfile {
  id: string
  email: string
  createdAt: string
  updatedAt: string
  firstName?: string
  lastName?: string
  avatarUrl?: string
  emailVerified: boolean
  subscriptionStatus: 'free' | 'active' | 'past_due' | 'canceled' | 'trialing'
  subscriptionId?: string
  themePreference: 'light' | 'dark' | 'system'
  onboardingCompleted: boolean
}

// Subscription types
export interface Subscription {
  id: string
  userId: string
  stripeSubscriptionId: string
  stripeCustomerId: string
  status: 'trialing' | 'active' | 'past_due' | 'canceled' | 'unpaid'
  planId: string
  currentPeriodStart: string
  currentPeriodEnd: string
  cancelAtPeriodEnd: boolean
  createdAt: string
  updatedAt: string
}

// Document types for RAG
export interface Document {
  id: string
  userId: string
  title: string
  fileName: string
  fileSize: number
  fileType: string
  storagePath: string
  uploadStatus: 'uploading' | 'uploaded' | 'failed'
  processingStatus: 'pending' | 'processing' | 'completed' | 'failed'
  chunkCount: number
  createdAt: string
  updatedAt: string
  metadata?: Record<string, unknown>
}

export interface DocumentChunk {
  id: string
  documentId: string
  chunkIndex: number
  content: string
  tokenCount: number
  pageNumber?: number
  embedding: number[]
  metadata?: Record<string, unknown>
  createdAt: string
}

// Chat types
export interface ChatSession {
  id: string
  userId: string
  documentId?: string
  title: string
  status: 'active' | 'archived' | 'deleted'
  createdAt: string
  updatedAt: string
  messageCount: number
  settings?: Record<string, unknown>
}

export interface ChatMessage {
  id: string
  sessionId: string
  role: 'user' | 'assistant' | 'system'
  content: string
  tokenCount?: number
  sourceChunks?: string[]
  modelUsed?: string
  processingTimeMs?: number
  createdAt: string
  metadata?: Record<string, unknown>
}

// Email types
export interface EmailSubscriber {
  id: string
  userId?: string
  email: string
  provider: 'convertkit' | 'mailerlite' | 'brevo' | 'sender'
  providerSubscriberId?: string
  status: 'subscribed' | 'unsubscribed' | 'bounced' | 'complained'
  subscribedAt: string
  unsubscribedAt?: string
  tags?: string[]
  customFields?: Record<string, unknown>
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: {
    message: string
    code?: string
    details?: unknown
  }
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    pageSize: number
    total: number
    totalPages: number
  }
}

// Form types
export interface SignupFormData {
  email: string
  password: string
  firstName?: string
  lastName?: string
}

export interface SigninFormData {
  email: string
  password: string
}

export interface PasswordResetFormData {
  email: string
}

export interface ProfileUpdateFormData {
  firstName?: string
  lastName?: string
  avatarUrl?: string
  themePreference?: 'light' | 'dark' | 'system'
}

// Stripe types
export interface PricingPlan {
  id: string
  name: string
  description: string
  price: number
  interval: 'month' | 'year'
  features: string[]
  stripePriceId: string
  popular?: boolean
}

// Health check types
export interface HealthCheck {
  status: 'healthy' | 'unhealthy'
  timestamp: string
  checks: {
    service: string
    status: 'healthy' | 'unhealthy' | 'disabled'
    message?: string
    latency?: number
  }[]
}

// Utility types
export type Result<T, E = Error> =
  | { success: true; value: T }
  | { success: false; error: E }

export type AsyncResult<T, E = Error> = Promise<Result<T, E>>
