'use client'

import { useEffect, useState } from 'react'
import type { HealthCheck } from '@/types'

export function StatusDashboard() {
  const [healthData, setHealthData] = useState<HealthCheck | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchHealth() {
      try {
        const response = await fetch('/api/health')
        if (!response.ok) {
          throw new Error('Health check failed')
        }
        const data = await response.json()
        setHealthData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch health status')
      } finally {
        setLoading(false)
      }
    }

    fetchHealth()
    // Refresh health status every 30 seconds
    const interval = setInterval(fetchHealth, 30000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div
        data-testid="status-dashboard"
        className="rounded-lg border border-border bg-card p-8 text-center"
      >
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="mt-4 text-sm text-muted-foreground">Loading system status...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div
        data-testid="status-dashboard"
        className="rounded-lg border border-destructive bg-destructive/10 p-8 text-center"
      >
        <p className="text-sm text-destructive">Error: {error}</p>
      </div>
    )
  }

  if (!healthData) {
    return null
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'text-green-600 dark:text-green-400'
      case 'unhealthy':
        return 'text-red-600 dark:text-red-400'
      case 'disabled':
        return 'text-gray-500 dark:text-gray-400'
      default:
        return 'text-muted-foreground'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return '✓'
      case 'unhealthy':
        return '✗'
      case 'disabled':
        return '○'
      default:
        return '?'
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-100 dark:bg-green-900/20'
      case 'unhealthy':
        return 'bg-red-100 dark:bg-red-900/20'
      case 'disabled':
        return 'bg-gray-100 dark:bg-gray-800/20'
      default:
        return 'bg-muted'
    }
  }

  return (
    <div data-testid="status-dashboard" className="space-y-4">
      {/* Overall Status */}
      <div
        className={`rounded-lg border p-4 text-center ${
          healthData.status === 'healthy'
            ? 'border-green-500 bg-green-50 dark:bg-green-900/10'
            : 'border-red-500 bg-red-50 dark:bg-red-900/10'
        }`}
      >
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl">
            {healthData.status === 'healthy' ? '✓' : '✗'}
          </span>
          <span
            className={`text-lg font-semibold ${
              healthData.status === 'healthy'
                ? 'text-green-700 dark:text-green-300'
                : 'text-red-700 dark:text-red-300'
            }`}
          >
            System {healthData.status === 'healthy' ? 'Healthy' : 'Unhealthy'}
          </span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          Last checked: {new Date(healthData.timestamp).toLocaleTimeString()}
        </p>
      </div>

      {/* Individual Service Checks */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {healthData.checks.map(check => (
          <div
            key={check.service}
            className={`rounded-lg border border-border p-4 ${getStatusBg(check.status)}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className={`text-xl ${getStatusColor(check.status)}`}>
                    {getStatusIcon(check.status)}
                  </span>
                  <h3 className="font-semibold capitalize">
                    {check.service.replace(/_/g, ' ')}
                  </h3>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{check.message}</p>
                {check.latency !== undefined && (
                  <p className="mt-1 text-xs font-mono text-muted-foreground">
                    {check.latency}ms
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-4 rounded-lg border border-border bg-muted/30 p-3 text-xs">
        <div className="flex items-center gap-1">
          <span className="text-green-600 dark:text-green-400">✓</span>
          <span className="text-muted-foreground">Healthy</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-red-600 dark:text-red-400">✗</span>
          <span className="text-muted-foreground">Unhealthy</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-gray-500 dark:text-gray-400">○</span>
          <span className="text-muted-foreground">Disabled</span>
        </div>
      </div>
    </div>
  )
}
